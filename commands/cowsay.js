const { SlashCommandBuilder } = require('discord.js');
const cowsay = require('cowsay');

let cowList = null;
function get_cows(error, cow_names) {
  if (error) {
    console.log(error);
  }
  else if (cow_names) {
    console.log('Number of cows available: ' + cow_names.length);
  }
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cowsay')
    .setDescription('ASCII art of cowsay')
    .addStringOption(option =>
      option
        .setName('input')
        .setDescription('The input for the thought bubble')
        .setMaxLength(2000))
    .addStringOption(option =>
      option
        .setName('animal')
        .setDescription('The type of animal that is displayed')),
  async execute(interaction) {
    cowList = await cowsay.list(get_cows);
    let input = interaction.options.getString('input') ?? 'I am Sergi Manolov';
    animal = interaction.options.getString('animal') ?? 'cat';

    // Check to see if the animal exists in the cow list, if not, we inform the user that the animal is invalid
    if (!cowList.includes(animal + '.cow')) {
      await interaction.reply('That is an invalid animal choice!');
      return;
    }

    let cowsayMsg = cowsay.think(
      {
        text: input,
        e: "oO",
        T: "U ",
        f: animal
      }
    );

    // Add the lengths of the ASCII art, the backticks, and the input message to make sure they are under 2000 characters
    let finalAscii = '\`\`\`' + cowsayMsg.replaceAll("`", "'") + '\`\`\`';
    if (finalAscii.length + input.length > 2000) {
      await interaction.reply('Message is too long!');
      return;
    }

    await interaction.reply(finalAscii);
  },
}