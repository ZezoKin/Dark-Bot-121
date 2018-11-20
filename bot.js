const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', message => {
	 var prefix = "#";
  let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + "kick")) {
 if (message.channel.type == "dm") return;
 if (message.author.bot) return;
 if (message.author.codes) return;
 if (message.author.kick) return;
               
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return;
  let user = message.mentions.users.first();
 

  if (message.mentions.users.size < 1) return message.reply("**Mention a User to Kick Him.**").then(message => message.delete(5000))
 
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Can’t Kick This User**").then(message => message.delete(5000))

  message.guild.member(user).kick(7, user);

  message.channel.send(`**${user.tag} Kicked From the Server.**`).then(message => message.delete(10000))

}
});

client.login(process.env.BOT_TOKEN);
