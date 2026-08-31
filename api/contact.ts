import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendContactEmail } from './_lib/sendContactEmail';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await sendContactEmail(req.body);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact API error:', error);
    const message = error instanceof Error ? error.message : '';
    const isValidationError =
      message.startsWith('Invalid') || message.endsWith('is required');

    return res.status(isValidationError ? 400 : 500).json({
      error: 'Failed to send message',
    });
  }
}
