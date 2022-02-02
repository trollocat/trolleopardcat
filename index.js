/* eslint-disable comma-dangle */
console.log("sexooo");

const { Client, Intents } = require("discord.js");
const { discordToken } = require("./config.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "server") {
    await interaction.reply(
      `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nCreation time: ${interaction.guild.createdAt}`
    );
  } else if (commandName === "user") {
    await interaction.reply("User info.");
  }
});

client.login(discordToken);
