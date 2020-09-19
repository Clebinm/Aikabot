const Discord = require("discord.js")
exports.run = async (bot, message, argumentos, arg_texto, chat) => {
  
  const ajuda = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Lista de comandos!")
    .setDescription("Reagir de acordo com o  que procura!\n\n📚 - Informações\n\n🔱 - Administrativos\n\n🎊 - Diversão")
    .setTimestamp()
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))   
    .setImage("https://emoji.gg/assets/emoji/3482_help.gif")
  message.channel.send(ajuda).then(msg => {
    msg.react('📚').then(r => {
      msg.react('🔱').then(r => {
    msg.react('🎊').then(r => {
      })
    })
  })
    
    const infosFilter = (reaction, user) => reaction.emoji.name === '📚' && user.id === message.author.id;
        const admFilter = (reaction, user) => reaction.emoji.name === '🔱' && user.id === message.author.id;
    const funFilter = (reaction, user) => reaction.emoji.name === '🎊' && user.id === message.author.id;
    
    const infos = msg.createReactionCollector(infosFilter);
        const adm = msg.createReactionCollector(admFilter);
    const fun = msg.createReactionCollector(funFilter);

    infos.on('collect', r2 => {
      
      ajuda.setTitle("Comandos informativos!")
      ajuda.setDescription("a!ajuda - Mostra os comandos do bot!")
      msg.edit(ajuda)
      
    })
    
    adm.on('collect', r2 => {
      
      ajuda.setTitle("Comandos de administração!")
      ajuda.setDescription("a!ban - Bana um membro!\"a!listban - Veja a lista dos usuários banidos!\"a!unban - Desbana um membro!\"a!anuncio - faça um anúncio em algum canal!")
      msg.edit(ajuda)
      
    })
    
    fun.on('collect', r2 => {
    ajuda.setTitle("Comandos de diversão")
      ajuda.setDescription("a!say - Me faça falar algo!")
      ajuda.addField("a!8ball - Me pergunte algo!")
      ajuda.addField("a!clima - Veja o clima de uma cidade!")
      ajuda.addField("a!cancelar -  Cancele um usuario.")
      ajuda.addField("a!esticar - Estica a foto de um usuario!")
       ajuda.addField("a!kiss - Beije alguém sem permissão!")
        ajuda.addField("a!say - Me faça falar algo!")
      msg.edit(ajuda)
      
    })
})  
  
  
  
  
  
  
  
  
  
  } 
  
 /* 
   const ajuda = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Lista de comandos!")
    .setDescription(`t.ajuda - mostra este comando \nt.say - Me faça falar algo \nt.ban - bana um membro \nt.unban - desbane um membro \nt.listban - mostra a lista de banidos`)
    .setTimestamp()
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))   
  
  message.channel.send(ajuda)*/
