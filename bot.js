const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', message => {
   if(message.content.startsWith ("#marry")) {
   if(!message.channel.guild) return message.reply('** This command only for servers **')
   var proposed = message.mentions.members.first()

   if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
   if(message.mentions.users.size > 1) return message.reply('ولد ما يصحلك الا حرمة وحدة كل مرة').catch(console.error);
    if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
     if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
           message.channel.send(`**${proposed}
بدك تقبلي عرض الزواج من ${message.author}
العرض لمدة 15 ثانية
اكتب موافقة او لا** `)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
 message.channel.send(`**${message.author} و ${proposed} الف الف مبروك الله يرزقكم الذرية الصالحة**`);
})
.catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))

const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
message.channel.send(`**${message.author} تم رفض عرضك**`);
})




}
});


client.login(process.env.BOT_TOKEN);
