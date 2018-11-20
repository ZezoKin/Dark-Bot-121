const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
         if (message.content.startsWith(prefix + "P.t")) {
         if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
                 if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
          message.guild.createChannel('☄-★-welcome-☆-☇ۨ', 'text')
          message.guild.createChannel('☄-★-rules-☆-☇', 'text')
          message.guild.createChannel('☄-★chat-☆-☇', 'text')
          message.guild.createChannel('ּ☄-★-youtube-☆-☇', 'text')
          message.guild.createChannel('ּ☄-★-giveaway-☆-☇', 'text') 
          message.guild.createChannel('ּ☄-★-bot-spam-☆-☇', 'text')
          message.guild.createChannel('ۭCreate a server', 'text')





     message.channel.sendMessage('**Channel Was Succsesfluy Created**')
     }
     });
client.login(process.env.BOT_TOKEN);
