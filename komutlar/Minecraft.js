const Discord = require("discord.js");
var Jimp = require("jimp");
const request = require("request");
var prefix = process.env.prefix;
exports.run = async (client, message, args) => {
  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;
  let mesaj = args.slice(1).join(" ");
  if (args[0] === "avatar") {
    let member = message.mentions.members.first();
    let body = "https://mc-heads.net/avatar/" + mesaj;
    if (mesaj.length < 1) return message.reply("bir oyuncu adı belirtmelisin.");
    if (mesaj == member) {
      message.reply("kullanıcı değil, bir oyuncu adı belirtmelisin :/");
    } else {
      const mcbody = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Oyuncu: " + mesaj)
        .setImage(body);
      message.channel.send(mcbody);
    }
  }
  if (args[0] === "vücut") {
    let member = message.mentions.members.first();
    let body = "https://mc-heads.net/body/" + mesaj;
    if (mesaj.length < 1) return message.reply("bir oyuncu adı belirtmelisin.");
    if (mesaj == member) {
      message.reply("kullanıcı değil, bir oyuncu adı belirtmelisin :/");
    } else {
      const mcbody = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Oyuncu: " + mesaj)
        .setImage(body);
      message.channel.send(mcbody);
    }
  }
  if (args[0] === "kafa") {
    let member = message.mentions.members.first();
    let body = "https://mc-heads.net/head/" + mesaj;
    if (mesaj.length < 1) return message.reply("bir oyuncu adı belirtmelisin.");
    if (mesaj == member) {
      message.reply("kullanıcı değil, bir oyuncu adı belirtmelisin :/");
    } else {
      const mcbody = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Oyuncu: " + mesaj)
        .setImage(body);
      message.channel.send(mcbody);
    }
  }
  if (args[0] === "skin") {
    let member = message.mentions.members.first();
    let body = "https://mc-heads.net/skin/" + mesaj;
    if (mesaj.length < 1) return message.reply("bir oyuncu adı belirtmelisin.");
    if (mesaj == member) {
      message.reply("kullanıcı değil, bir oyuncu adı belirtmelisin :/");
    } else {
      const mcbody = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Oyuncu: " + mesaj)
        .setImage(body);
      message.channel.send(mcbody);
    }
  }
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mc"],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: "minecraft",
  description: "Avatariniza Balance Efekti Ekler.",
  usage: "minecraft <rakam>"
};
