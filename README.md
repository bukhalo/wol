## Wake-on-Lan implementation for Deno

[![JSR Scope](https://jsr.io/badges/@bukhalo)](https://jsr.io/@bukhalo)
[![JSR Score](https://jsr.io/badges/@bukhalo/wol/score)](https://jsr.io/@bukhalo/wol)
[![JSR](https://jsr.io/badges/@bukhalo/wol)](https://jsr.io/@bukhalo/wol)

Add package in your project:

```bash
deno add @bukhalo/wol
```

Or add package without install step:

```typescript
import { wol } from "jsr:@bukhalo/wol";
```

Execute `wake` function from package:

```typescript
import { wol } from "@bukhalo/wol";

wake("00:00:00:00:00:00");
```

> [!IMPORTANT] Don't forget to add the `--unstable-net` flag to your startup
> task:
>
> ```json
> // deno.json
> {
>   "tasks": {
>     "start": "deno run --unstable-net main.ts"
>   }
> }
> ```

Also you can use `magicPacket` function for generate magic packet only:

```typescript
import { magicPacket } from '@bukhalo/wol`

const packet = magicPacket('00:00:00:00:00:00');
```
