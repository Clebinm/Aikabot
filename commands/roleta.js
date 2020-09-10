const Discord = require("discord.js");
 
exports.run = (bot, message, args) => {
 
    var random = Math.floor(Math.random() * (5 - 2) + 2);
    if (random === 3){
 
        let embed = new Discord.RichEmbed()
 
        .setDescription(`Rodou o cartucho e vc sobreviveu!`)
        .setColor('RANDOM')
        .setFooter(`A bala ficou no cartucho ${Math.round(random)}`)
 
        message.reply(embed)
    }
    else{
        let embed2 = new Discord.RichEmbed()
 
        .setDescription(`Rodou o cartucho e vc morreu!`)
        .setColor('RANDOM')
        .setFooter(`A bala estava no cartucho ${Math.round(random)}`)
 
        message.reply(embed)
    }
 
}
 
exports.help = {
    name: 'roleta'
}