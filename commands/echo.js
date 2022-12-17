const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input')
    .addStringOption(option =>
      option.setName('input').setMaxLength(25)
        .setDescription('The input to echo back'))
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('The channel to echo into'))
    // async execute(interaction) {
    //   await interaction.reply('input')

    // .addChannelTypes(ChannelType.GuildText)
    .addBooleanOption(option =>
      option.setName('embed')
        .setDescription('Whether or not the echo should be embedded')),
  async execute(interaction) {
    const value = interaction.options.getString('input');
    if (value) return interaction.reply(` \`${value}\``);
    //return interaction.reply('No option was provided!');
  },
};
