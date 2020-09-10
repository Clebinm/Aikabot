const { MessageEmbed } = require('discord.js')

module.exports = {
    name:"servericon",
    category:"info",
    description:"comando para ver a foto do servidor",
    run: async (client, message, args) => {
        let ft = message.guild.iconURL({ size : 1024 })

  const embed = new MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`Icone do server ${message.guild}`)
  .setImage(ft)
  
  message.channel.send(embed)
    }
}