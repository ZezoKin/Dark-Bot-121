const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
           var prefix = "#";
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`Official Team`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});
client.login(process.env.BOT_TOKEN);
