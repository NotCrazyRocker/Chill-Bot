const { Events, Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Client logged in as ${client.user.tag}`);
  },
};
