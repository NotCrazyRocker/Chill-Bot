const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Pong!"),
  async execute(interaction) {
    interaction.channel.sendTyping();
    await interaction.reply({ content: "Pong!" });
  },
};
