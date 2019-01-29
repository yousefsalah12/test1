const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("539707982695497731")
setInterval(function() {
channel.send(`3ber 2ber 3ber 2ber`);
}, 30)
})

client.login(process.env.BOT_TOKEN);