import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { sendContactEmail } from './api/_lib/sendContactEmail'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [
      react(),
      {
        name: 'contact-api',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url?.split('?')[0] !== '/api/contact') {
              next()
              return
            }

            if (req.method !== 'POST') {
              res.statusCode = 405
              res.setHeader('Allow', 'POST')
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Method not allowed' }))
              return
            }

            try {
              const raw = await new Promise<string>((resolve, reject) => {
                const chunks: Buffer[] = []
                req.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
                req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
                req.on('error', reject)
              })

              let payload: unknown = {}
              try {
                payload = raw ? JSON.parse(raw) : {}
              } catch {
                throw new Error('Invalid request body')
              }

              await sendContactEmail(payload)

              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: true }))
            } catch (error) {
              console.error('Contact API error:', error)
              const message = error instanceof Error ? error.message : ''
              const isValidationError =
                message.startsWith('Invalid') || message.endsWith('is required')

              res.statusCode = isValidationError ? 400 : 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Failed to send message' }))
            }
          })
        },
      },
    ],
    server: {
      port: 3000,
      open: true
    }
  }
})
