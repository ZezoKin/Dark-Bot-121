const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', message => {
        if(message.content === prefix + "hc") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('Channel Hided Successfully ! ✅  ')
   }
  });

client.login(process.env.BOT_TOKEN);
