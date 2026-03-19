import { serve } from '@hono/node-server'
import app from '@/server'
import { cors } from 'hono/cors'

console.log('Backend running on http://localhost:3000')

app.use(
  '*',
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
)

serve({
  fetch: app.fetch,
  port: 3000
})
