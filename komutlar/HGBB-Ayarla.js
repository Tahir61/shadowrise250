const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`
        )
    );

  let channel = message.mentions.channels.first();
  if (!channel) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`<@${message.author.id}> | Bir Kanal Etiketleyin`)
    );
  }
  db.set(`gçkanal_${message.guild.id}`, channel.id);
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(
        `** HG-BB Kanalı ${channel} Olarak Ayarlandı.** `
      )
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gç-ayarla"],
  permLevel: 0
};

exports.help = {
  name: "hgbb-ayarla",
  description: "Giriş Çıkış Kanalını Ayarlar.",
  usage: "gç-ayarla <#kanal>"
};
