import { Hono } from 'hono'
import { logger } from 'hono/logger'

export type AppType = {
  message: string
}

const app = new Hono().basePath('/xo')

app.use(logger())

app.get('/hello', (c) => {
  return c.json({ message: 'Hello from Hono!' })
})

export default app
