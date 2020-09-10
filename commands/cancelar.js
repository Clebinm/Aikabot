const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  let pergunta = args.join(" ") 
  if (!pergunta) return message.channel.send('Mencione um usuário para cancelar.')
  else {
    let cancela = [
      "ser um idiota.",
      "não fazer nada direito.",
      "ser um vagabundo.",
      "ser lindo de mais.",
      "por ser muito gostoso.",
      "não reportar um bug.",
      "dar em cima do meu criador.",
      "ser chato de mais.",
      "abusar de um bug.",
      "não usar o SoundPlay."
    ];
    
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Por favor, mencione alguém para cancelar.');
}

   let cancelado =
    cancela[Math.floor(Math.random() * cancela.length)];
   let embed = new MessageEmbed()
   .setTitle('Cancelamento aqui no caixa 23')
   .setColor('5F2237')
   .setDescription(`${user} foi cancelado por ${cancelado}`)
   message.channel.send(embed)
  }
}