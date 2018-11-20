const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
var Canvas = require('canvas');
var jimp = require('jimp');
const moment = require('moment');
var prefix = "+";
client.on('ready', () => {
client.on('message', message => {
    if(message.content.startsWith(prefix+'help')) {
   const embed = new Discord.RichEmbed()
.setColor('RANDOM')
        .setDescription(`**
General's Commands. 
${prefix}members - معلومات عن الاعضاء التى بسيرفرك :scroll:
${prefix}server - معلومات عن السيرفر :smile:
${prefix}clear - يمسح الشات بس حط عدد  :eyeglasses: 
${prefix}id - معلومات عنك  :scroll:
${prefix}ban - يعطى بان بس حط سبب :flashlight:
${prefix}kick - يعطى كيك مع السبب :frame_photo:
${prefix}bc - انشا رساله جماعيه لكل الى فسيرفر بالخاص:microphone:
${prefix}mc - يغلق الشات :nut_and_bolt:
${prefix}unmc - يفتح الشات :nut_and_bolt:
Game's Commands
${prefix}marry / لعبه التزاوج بس منشن للى تبيه』
${prefix}sra7a / اساله وتجاوب بصراحه』
${prefix}8ball ثم اساله سؤوال وهو سوف يجاوبك 
            bot info       
!inv - لدعوة البوت :pen_fountain:  **`)
    message.author.send(embed)
}
});
client.login(process.env.BOT_TOKEN);
