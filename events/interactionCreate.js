const { Events } = require('discord.js')

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.error(`No command matching ${interaction.commandName}was found.`);
      return;
    }
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(`Error executing ${interaction.commandName}`);
      console.error(error);
    } if (interaction.isButton()) {
      if (interaction.customId.includes('-button')) {
        if (interaction.customId.includes('primary-button')) {
          await interaction.reply({ content: 'You presses on Primary Button' })
        }
      }
    }
  },
};