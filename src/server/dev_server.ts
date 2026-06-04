import { serve } from "@hono/node-server"
import app from "./index.ts"

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});
