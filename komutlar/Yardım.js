const Discord = require("discord.js");
let ICON = `https://cdn.discordapp.com/icons/830825471733792778/362ee149a089ec6012e0e7624deec926.png?size=128`;
let prefix = `${process.env.prefix}`;
exports.run = async (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#92DDEC")
    .setFooter(
      `${message.author.username} | Tarafından kontrol ediliyor...`,
      message.author.avatarURL()
    )
    .setTitle("∎ ShadowRise Network ∎")
    .setThumbnail(`${ICON}`)
    .setImage(
      `http://status.mclive.eu/ShadowRise%20Network/play.shadowrise.com/25565/banner.png`
    )
    .addField(
      `<:durum:833371088951443496> Sunucu Durum`,
      `\`${prefix}mcsunucu play.shadowrise.com\``,
      false
    )
    .addField(
      `:bowling: Eğlence`,
      `\`${prefix}espri\` \`${prefix}düello\` \`${prefix}atasözü\` \`${prefix}steam\` \`${prefix}trump\` \`${prefix}zar-at\` \`${prefix}tkm\` \`${prefix}yazı-tura\` \`${prefix}stres-çarkı\``,
      false
    )
    .addField(
      `📰 Log`,
      `\`${prefix}reklamlog\` \`${prefix}küfürlog\` \`${prefix}modlog\``,
      false
    )
    .addField(
      `🔌 Guard`,
      `\`${prefix}küfür-engel\` \`${prefix}reklam-engel\` \`${prefix}bot-izni\` \`${prefix}kanal-koruma\` \`${prefix}bot-koruma\``,
      false
    )
    .addField(
      `🍁 Sayaç`,
      `\`${prefix}sayaç-ayarla\` \`${prefix}sayaç-kanal\``,
      false
    )
    .addField(
      `🔍 Otorol & Bot Rol`,
      `\`${prefix}otorol\` \`${prefix}otorol-ayarla\` \`${prefix}otorol-msg\` \`${prefix}otorol-kapat\` \`${prefix}bot-rol\` \`${prefix}botrol-kapat\``,
      false
    )
    .addField(
      `🎓 Sohbet & Rol`,
      `\`${prefix}sohbet-aç\` \`${prefix}sohbet-kapat\` \`${prefix}rol-ver\` \`${prefix}rol-al\``,
      false
    )
    .addField(
      `🎃 Seviye`,
      `\`${prefix}seviye\` \`${prefix}sıralama\` \`${prefix}seviye-ayarla\` \`${prefix}seviyekart-özelleştir\``,
      false
    )
    .addField(
      `<:yapimci:833618843691778058> Yapımcı`,
      `\`${prefix}eval\` \`${prefix}bakım\``,
      false
    )
    .addField(
      `<:mod:833354693211848715> Moderasyon`,
      `\`${prefix}ban\` \`${prefix}kick\` \`${prefix}oylama\` \`${prefix}oylama-kanal\` \`${prefix}banlist\`  \`${prefix}hgbb-ayarla\` \`${prefix}temizle\``,
      false
    )
    .addField(
      `🌀 Profil`,
      `\`${prefix}profilim\` \`${prefix}isim-ayarla\` \`${prefix}yaş-ayarla\` \`${prefix}soyisim-ayarla\` \`${prefix}cinsiyet-ayarla\` \`${prefix}bayrak-ayarla\``,
      false
    )
    .addField(
      `:earth_africa: Kullanıcı`,
      `\`${prefix}profil\` \`${prefix}avatar\` \`${prefix}rank\` \`${prefix}afk\` \`${prefix}ping\` \`${prefix}mc-bilgi\` \`${prefix}havadurumu\` \`${prefix}korona-bilgi\` \`${prefix}öneri\` \`${prefix}say\``,
      false
    );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "",
  usage: ""
};
