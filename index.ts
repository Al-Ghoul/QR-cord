import { Client, Events, } from "discord.js";

const client = new Client({ intents: [] });

client.once(Events.ClientReady, readyClient => {
  console.log(`Ready! logged in as ${readyClient.user.tag}`);
});

client.login(process.env.BOT_TOKEN);

