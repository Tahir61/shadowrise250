const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  
  let role = message.mentions.roles.first()
  
  if (!role) { 
    
    var embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Sunucudaki herkesten alınmasını istediğiniz rolü etiketlemelisiniz!")
    message.channel.send(embed)
    
    return;
  }
  
  if (!message.guild.roles.cache.has(role.id)) {
    var embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(" <:cancel:599234505399861248> Sunucuda `" + role.name + "` isminde bir rol bulunmuyor!")
    message.channel.send(embed)
    
    return;
  }
  
  message.channel.send("Sunucudaki herkesten `" + role.name + "` adlı rol alınıyor... Bu biraz zaman alabilir.")
  
  var rol = message.guild.roles.cache.get(role.id);
  
  try {
    message.guild.members.cache.forEach(async (user, id) => {
     user.roles.remove(rol)
  });
  } catch(e){
      //console.log(e.stack);
  }
  
 /* if ("s") {
    message.channel.send("Sunucudaki herkesten başarıyla `" + role.name + "` adlı rol alındı!")
  };*/
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["herkesten-rol-al"],
    permLevel: 4,
    kategori: "moderasyon"
  };
  
  exports.help = {
    name: 'toplu-rol-al',
    description: 'İstediğiniz rolü sunucudaki herkesten alır.',
    usage: 'toplu-rol-al [@rol]'
  };