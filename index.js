// @ts-check

import "dotenv/config";

import { Client } from "discord.js";
import { SlashCenter } from "cocoa-discord-utils/slash";
import { CocoaOptions } from "cocoa-discord-utils/template";
import { checkLogin } from "cocoa-discord-utils";

const client = new Client(CocoaOptions);

const center = new SlashCenter(client, process.env.GUILD_IDS?.split(","));

client.on("ready", async (cli) => {
  console.log(`Logged in as ${cli.user.tag}`);
  await center.syncCommands();
  console.log("DONE!");
  cli.destroy();
  process.exit(0);
});

checkLogin(client, process.env.DISCORD_TOKEN);
