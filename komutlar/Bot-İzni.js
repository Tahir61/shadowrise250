const Discord = require("discord.js");
const db = require("quick.db");
let prefix = process.env.prefix;
exports.run = (client, message, args) => {
  if (db.has(`antiraidK_${message.guild.id}`) === false) {
    return message.channel.send(
      new Discord.MessageEmbed().setDescription(
        `Bot koruma sistemi açılmamış. Açmak için **${prefix}bot-koruma aç**`
      )
    );
  }
  if (!args[1])
    return message.reply(
      new Discord.MessageEmbed().setDescription(
        "Lütfen Bir Bot ID Girin."
      )
    );

  if (isNaN(args[1])) {
    return message.channel.sed(
      new Discord.MessageEmbed()
        .setColor(`BLACK`)
        .setDescription("Sadece Bot ID Girin.")
    );
  }
  if (args[0] == "ver") {
    client.users.get(args[0]);
    db.set(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    const verdik = new Discord.MessageEmbed()
      .setColor(`BLACK`)
      .setDescription(
        "" + args[1] + "ID li bota izin verildi."
      );
    message.channel.send(verdik);
  }
  if (args[0] == "kaldır") {
    db.delete(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    const kaldırdık = new Discord.MessageEmbed()
      .setColor(`BLACK`)
      .setDescription(
        "" + args[1] + "ID'li botun izni kaldırıldı."
      );
    message.channel.send(kaldırdık);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bot-izni"],
  permLevel: 0
};
exports.help = {
  name: "bot-izni"
};
