const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Yöneticin Yok!')
const Rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(x => x.name === args[0])
if (!Rol) return message.channel.send('Rol Etiketlemelisin.')
  
  
const metehan = new Discord.MessageEmbed()
.setDescription(`Herkese ${Rol} adlı rol verildi!`)
.setColor(Rol.hexColor)
message.guild.members.cache.forEach(Metehan => {
Metehan.roles.add(Rol)
})
message.channel.send(metehan)
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['herkeserolver','herkese-rol-ver'],
    permLevel: 3
}

exports.help = {
    name: "rol-ver",
    description: 'Herkese Rol Verir.',
    usage: 'herkeserolver'
}