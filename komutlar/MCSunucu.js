const Discord = require("discord.js");
const request = require("request");
const ayarlar = require("../ayarlar.json");
var mcPort = 25565;
let prefix = process.env.prefix;

exports.run = (client, message, args) => {
  if (message.content.startsWith(prefix + "mcsunucu")) {
    var url =  'http://mcapi.us/server/status?ip=' + args[0] + '&port=' + mcPort;
    let reason = args.slice(0).join(" ");
    request(url, function(err, response, body) {
      if (err) {
        console.log(err);
        return message.channel.send(
          new Discord.MessageEmbed()
            .setTitle("Hata!")
            .addField(
              "Sunucu bilgileri alınırken beklenmedik bir hatayla karşılaştık."
            )
            .setThumbnail(
              ""
            )
            .setAuthor("")
            .setFooter("")
            .setColor("RANDOM")
            .setTimestamp()
        );
      }
      body = JSON.parse(body);

      if (body.online) {
        if (body.players.now) {
          const embed = new Discord.MessageEmbed()
            .setTitle(`:cyclone: ${reason}`)
            .addField(`:crystal_ball: **IP Adresi**`, `${reason}`, true)
            .addField(`:satellite: **Port**`, `25565`, true)
            .addField(
              `:person_juggling: **Çevrimiçi**`,
              `${body.players.now}/${body.players.max}`,
              true
            )
            .addField(`:round_pushpin: **Şifreleme**`, `Yok`, true)
            .addField(
              `:level_slider: **Protocol**`,
              `${body.server.protocol}`,
              true
            )
            .addField(
              `:person_surfing: **Reklamcı**`,
              `${message.author.username}`,
              true
            )
            .addField(`:fries: **Discord**`, `Bilinmiyor.`, true)
            .addField(`:tea: **Sunucu Aktif**`, `Evet`, true)
            .addField(
              `:small_orange_diamond: Sunucu Version`,
              `${body.server.name}`,
              true
            )
            .setFooter(
              `${message.author.username} | Tarafından kontrol ediliyor...`,
              message.author.avatarURL()
            )
            .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${reason}`)
            .setImage(
              `http://status.mclive.eu/Sunucu%20Durumu/${reason}/25565/banner.png`
            );
          message.channel.send(embed);
        } else {
          status += "**〉** Şu anda sunucuda kimse yok.";
        }
      }
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mcsunucu", "mc sunucu"],
  permLevel: 0
};

exports.help = {
  name: "mcsunucu",
  description: "Minecraft sunucu bilgisini verir.",
  usage: "mcserver <sunucu IP>"
};
