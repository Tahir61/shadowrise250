const Discord = require('discord.js');

var yt = [
    "Tura",
    "Yazı"
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " Para Döndü: " + (yt[Math.floor(Math.random() * yt.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Botunuz Yazı Tura Atar',
  usage: 'yazı-tura'
};