const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PHONE_PATTERN = /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function readString(value: unknown, field: string, maxLength: number): string {
  if (typeof value !== 'string') {
    throw new Error(`Invalid ${field}`);
  }

  const trimmed = value.trim();
  if (!trimmed) {
    throw new Error(`${field} is required`);
  }

  if (trimmed.length > maxLength) {
    throw new Error(`Invalid ${field}`);
  }

  return trimmed;
}

export function parseContactPayload(body: unknown): ContactPayload {
  if (!body || typeof body !== 'object') {
    throw new Error('Invalid request body');
  }

  const data = body as Record<string, unknown>;
  const name = readString(data.name, 'name', 120);
  const email = readString(data.email, 'email', 254);
  const phone = readString(data.phone, 'phone', 40);
  const message = readString(data.message, 'message', 5000);

  if (!EMAIL_PATTERN.test(email)) {
    throw new Error('Invalid email');
  }

  if (!PHONE_PATTERN.test(phone)) {
    throw new Error('Invalid phone');
  }

  return { name, email, phone, message };
}

export async function sendContactEmail(input: unknown): Promise<void> {
  const data = parseContactPayload(input);
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !from || !to) {
    throw new Error('Missing Resend environment variables');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `New website inquiry from ${data.name}`,
      text: [
        'A new contact form submission was received.',
        '',
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        '',
        'Message:',
        data.message,
      ].join('\n'),
      html: `
        <h2>New website inquiry</h2>
        <p>A new contact form submission was received.</p>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(data.message).replace(/\n/g, '<br />')}</p>
      `,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error('Resend API error:', response.status, details);
    throw new Error('Failed to send email');
  }
}

function jsonError(error: unknown, fallbackStatus = 500): Response {
  console.error('Contact API error:', error);
  const message = error instanceof Error ? error.message : '';
  const isValidationError =
    message.startsWith('Invalid') || message.endsWith('is required');

  return Response.json(
    { error: 'Failed to send message' },
    { status: isValidationError ? 400 : fallbackStatus }
  );
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json().catch(() => null);
    await sendContactEmail(body);
    return Response.json({ ok: true });
  } catch (error) {
    return jsonError(error);
  }
}

export default async function handler(
  req: { method?: string; body?: unknown } & Partial<Request>,
  res?: {
    setHeader: (name: string, value: string) => void;
    status: (code: number) => { json: (body: unknown) => void };
  }
) {
  if (typeof res?.status !== 'function') {
    if (req.method !== 'POST') {
      return Response.json({ error: 'Method not allowed' }, { status: 405 });
    }

    return POST(req as Request);
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await sendContactEmail(req.body);
    return res.status(200).json({ ok: true });
  } catch (error) {
    const response = jsonError(error);
    return res.status(response.status).json({ error: 'Failed to send message' });
  }
}
