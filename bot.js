const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" كيف اقدر اساعدك!!");
    }
});

client.login(process.env.BOT_TOKEN);
