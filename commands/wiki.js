const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  
  const wiki = args.slice(0).join(" ")
    let guild = await client.guilds.cache.get('751446932777336922'); //id do servidor que a wiki sera mandada
    let channel = await client.channels.cache.get('751446933469528164'); //id do canal que a wiki sera mandada

        let embed = await new Discord.MessageEmbed()
            .setColor('#7c2ae8')
            .setDescription(wiki)
            .setFooter('Código de é gelinho')
            .setTimestamp();

        channel.send(embed);
    message.reply("sua wiki foi mandada com sucesso")
    
};