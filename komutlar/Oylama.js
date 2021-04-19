const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
let prefix = process.env.prefix;

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          "Bu Komutu kullanmanız için `Yönetici` yetkisine sahip olmalısınız."
        )
    );

  let d = await db.fetch(`okanal_${message.guild.id}`);
  const sea = message.guild.channels.cache.get(d);
  if (!sea)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `! Oylama Kanalı Ayarlanmamış. \n Ayarlamak İçin \`${prefix}oylama-kanal #kanal\``
        )
    );

  let yazi = args.slice(0).join(" ");
  if (!yazi) return message.channel.send("Lütfen Oylamada Ne Olacağını Yaz!");
  message.channel.send(`Oylama gönderildi. Gönderilen kanal: <#${d}>`);
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("__Oylama Var!__", `**${yazi}**`)
    .setThumbnail(
      ` https://media.discordapp.net/attachments/822526781839245332/822526805734850600/20210319_160634.png`
    )
    .setFooter(`${message.author.username} oylama yaptı.`)
    .setAuthor(`${client.user.username} Oylama`);
  sea.send("||@everyone|| ||@here||", { embed: embed }).then(m => {
    let re = m.react("<:onay:833640050330697739>");
    let ra = m.react("<:reddet:833640227104358400>");
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama-yap", "oylamayap", "oylamalar"],
  permLevel: 2,
  kategori: "yetkili"
};

exports.help = {
  name: "oylama",
  description: "Bulunduğunuz kanala oylama yapar.",
  usage: "oylama"
};
