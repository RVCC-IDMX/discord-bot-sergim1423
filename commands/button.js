const { SlashCommandBuilder } = require('discord.js');
const { ActionRowBuilder, MessageSelectMenu, ButtonBuilder, ButtonStyle, MessageActionRow } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('buttons')
    .setDescription('Will allow to press button'),
  async execute(interaction, client) {
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('primary')
          .setLabel('Click me!')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setURL(`https://github.com/RVCC-IDMX/discord-bot-sergim1423/commits/main`)
          .setLabel('Click Link!')
          .setStyle(ButtonStyle.Link),
      );
    await interaction.reply({ content: 'I think you should,', components: [row] });
  },
};
