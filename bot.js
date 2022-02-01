console.log("sexooo");

const { Client, Intents } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log("Ready!");
});

client.login(process.env.DISCORD_TOKEN);

client.on("message", gotMessage);

function gotMessage(msg) {
  console.log(msg.content);
  if (msg.content === "tetas") {
    msg.reply("si, tetas");
  }
}
