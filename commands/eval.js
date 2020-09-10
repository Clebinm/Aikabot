const discord = require('discord.js')

module.exports = {
  name:"eval",//galera eu não vou por description e nem category mais se vcs quiserem por pode colocar
  aliases: ['cmd'],
  run: async (client, message, args) => {
   if(!['653009469374201856'].includes(message.author.id)) {
     return message.channel.send('Apenas meu criador pode usar esse comando') //vou entrar na minha conta secundaria e ja volto
   }//essa parte é só para vc usar o comando 
    
    let code = args.slice(0).join(" ")
    
    try {
      let ev = require("util").inspect(eval(code))
      if(ev.length > 1950) {
        ev = ev.subtr(0, 1950);        
      }
      
      let embed = new discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(":desktop: Console:" + `\n\` ${code} \` \n` + ":card_box: Resposta: " + `\` ${ev} \` `)
      
      message.channel.send(embed)
      
      //agr vamos fazer para se caso ele achar algum erro
    } catch(err) {
      let erro = new discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(":desktop: Console:" + `\n\` ${code} \` \n` + ":card_box: Resposta: " + `\` Eu detectei um erro: ${err} \``)
      
      message.channel.send(erro)
    }
    
    
    
  }
}