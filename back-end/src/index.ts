import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello HOnne!')
})

export default {
  port: 4545,
  fetch: app.fetch,
}
