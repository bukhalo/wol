import "jsr:@std/dotenv@0.224.2/load";
import { wake } from "./wake.ts";

Deno.test("wake", () => {
  const MAC = Deno.env.get("MAC");

  if (!MAC) {
    throw new Error('"MAC" environment variable not found');
  }

  wake(MAC);
});
