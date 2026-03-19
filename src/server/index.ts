import { Hono } from 'hono'

export type AppType = {
  message: string
}

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({ message: 'Hello from Hono!' })
})

export default app

