export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PHONE_PATTERN = /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

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

  const { Resend } = await import('resend');
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
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
  });

  if (error) {
    throw new Error(error.message || 'Failed to send email');
  }
}
