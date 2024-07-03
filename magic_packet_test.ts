import "jsr:@std/dotenv@0.224.2/load";
import { assertEquals } from "jsr:@std/assert@0.226.0";
import { magicPacket } from "./magic_packet.ts";

Deno.test("magicPacket", () => {
  const testMacAddress = "77:e0:e3:92:45:67";
  // deno-fmt-ignore
  const referenceMagicPacket = new Uint8Array([
    255, 255, 255, 255, 255, 255,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
    119, 224, 227, 146, 69, 103,
  ]);

  assertEquals(magicPacket(testMacAddress), referenceMagicPacket);
});
