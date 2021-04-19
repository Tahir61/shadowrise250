const Discord = require("discord.js");
const request = require("request");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("")
   .setThumbnail("https://eu.mc-api.net/v3/server/favicon/play.craftrise.tc")
    .setColor("#92DDEC")
    .setTitle(`:cyclone: ShadowRise Network Sunucu Bilgi`)
    .addField(`:crystal_ball: Sunucu IP`, `Yakında`, true)
    .addField(`:alarm_clock: WebSite`, `Www.Yakında.Com`, true)
    .addField(
      `:dolls: Toplam Oyuncu`,
      `» ${message.guild.memberCount}`,
      true
    )
    .addField(
      `:level_slider: Daha Fazla`,
      `[Tıkla](https://minecraft-sunucubilgi.glitch.me/)`,
      true
    )
    .addField(`:fries: Discord`, `[Tıkla](https://discord.gg/mD9wmtnpQM)`, true)
    .addField(`🐥 Sürüm`,`1.8 - 1.16`, true)
    .setImage(
      `http://status.mclive.eu/Sunucu%20Durumu/198.168.1.1/25565/banner.png`
    );
  message.channel.send(embed);
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: "mc-bilgi"
};
