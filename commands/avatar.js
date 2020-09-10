const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "avatar",
    category:"info",
    description:"Comando para ver avatar",
    run: async (client, message, args) => {
        const member = message.mentions.users.first() || message.author
        
        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Avatar de ${member.tag}`)
        .setImage(client.users.cache.get(member.id).displayAvatarURL({ dynamic : true, format : 'png', size : 1024}))
        
        message.channel.send(embed)
    }
}