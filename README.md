# Slash Purge 2

Remove all slash commands

## How to use

Replace cocoa-discord-utils/dist/slash/SlashCenter.js Line 45 with

```js
await (0, SlashSync_1.syncCommands)(commandData, this.client, this.guild_ids);
```
