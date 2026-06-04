import app from "src/server";
import { handle } from "hono/cloudflare-pages";

export const onRequest = handle(app);
