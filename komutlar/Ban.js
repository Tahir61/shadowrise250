const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  if (message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send("Bu komutu kullanabilmek için \`Üyeleri Yasakla\` iznine sahip olmalısın!");

  let EmingUSER = message.mentions.members.first();

  let EmingSEBEP = args.slice(1).join(" ") || "Belirtilmemiş";

  if (!EmingUSER) return message.channel.send("> Banlanacak kişiyi seçmelisin.");

  message.guild.members.ban(EmingUSER, { reason: EmingSEBEP });

  message.channel.send(
    "<@" +
      EmingUSER.id +
      "> kişisi <@" +
      message.author.id +
      "> isimli yetkili tarafından ``" +
      EmingSEBEP +
      "`` sebebiyle banlandı."
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ban",
  description: "",
  usage: ""
};
