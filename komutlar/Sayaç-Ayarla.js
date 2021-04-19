const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (client, message, args) => {
  const db = require("quick.db");
  let botadi = process.env.botadi;
  let prefix = process.env.prefix;
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `Bu Komutu Kullanabilmek İçin \`Yönetici\` iznine sahip olmalısın!`
    );

  if (!args[0]) {
    return message.channel.send(`Lütfen Ayarlamak İstediğiniz Sayıyı Yazınız`);
  }

  if (args[0] === "kapat") {
    if (db.has(`sayac_${message.guild.id}`) === true) {
      db.delete(`sayac_${message.guild.id}`);

      if (db.has(`sKanal_${message.guild.id}`) === true) {
        db.delete(`sKanal_${message.guild.id}`);
        message.channel.send(`Sayaç Kanalı | Sayaç Başarıyla Kaldırıldı.`);

        return;
      }

      message.channel.send(`Sayaç Başaralı Şekilde Kaldırıldı.`);

      return;
    }
    message.channel.send(`
     Sayaç Ayarlanmamış.`);
    return;
  }

  if (isNaN(args[0])) {
    return message.channel.send(`Sadece Sayı!`);
  }

  if (args[0] <= message.guild.memberCount) {
    const embed = new Discord.MessageEmbed();
    return message.channel.send(
      `Lütfen __Sunucu Sayısından Daha Yüksek Bir Değer__ Girin!`
    );
  }

  db.set(`sayac_${message.guild.id}`, args[0]);

  message.channel.send(`
Sayaç Başarıyla Ayarlandı: \`${args[0]}\`
Sayaç Kapatmak İsterseniz \`${prefix}sayaç kapat\` Yazmanız Yeterlidir.
Sayaç Kanalı İçin \`${prefix}sayaç-kanal-ayarla #kanal\`
`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sayacayarla", "sayac", "sayaç"],
  permLevel: 0
};

exports.help = {
  name: "sayaç-ayarla",
  description: "Sayacı ayarlar.",
  usage: "saya-çayarla "
};
