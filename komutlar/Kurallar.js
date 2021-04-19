const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;

  const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#92DDEC")
    .setImage(
      "https://media.discordapp.net/attachments/831973848667783229/833017362708955176/Baslksz-1.png"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/822603993670615072/a1f0c783395132c70d7bde6c80b370cf.png?size=128"
    )
    .setTitle(`📖 Minecraft Kuralları`).setDescription(`
**Reklam**
 Sözlü reklamlar, link ile reklam, özelden reklam, resim ile reklam ve benzeri şekilde reklamlar yapmak yasaktır.

**Küfür, Argo, Hakaret**
 Her kanalda küfür etmek ve argo kullanmak yasaktır.
 Üyelere karşı hakaret etmek ve dalga geçme yasaktır.

**Yetkililer ve Yetki**
 Yetki istemek yasaktır.
 Yetkili alımları ile ilgili soru sormak yasaktır.
 Yetkilileri boş yere @etiketlemek ve @etiketleyerek spam yapmak yasaktır.
 Yetkililere saygılı olun.

**Spam, Flood, Etiketleme**
 Spam yapmak yasaktır.
 Bir kelimeyi sürekli bir mesajda yazmak yasaktır.
 Flood yapmak alt alta yazmak yasaktır.
 Bir üyeyi sürekli @etiketlemek yasaktır.

**Din, Siyaset, Cinsellik**
 Din ile ilgili konuşmak, tartışmak, kullanıcı adlarını din ile ilgili koymak yasaktır.
 Siyaset ile ilgili konuşmak, tartışmak, kullanıcı adlarını siyaset ile ilgili koymak yasaktır.
 18+ fotoğraflar paylaşmak ve konuşmak yasaktır.

**Kavga, Tartışmak**
 Kavga etmek, kavgaya dahil olmak ve tartışmak yasaktır.
 Herhangi bir sorununuz varsa yetkiliye danışınız`);
  message.channel.send(exampleEmbed).then;
  const embed = new Discord.MessageEmbed()
    .setTitle(`📖 Discord Kuralları`)
    .setColor("#92DDEC")
    .setDescription(
      `
• Ağır küfür yasaktır.
• Rahatsız edici paylaşımlar yapmak yasaktır (Örn: +18, korku, cinsellik vs.).
• Spam yapmak yasaktır.
• Reklam yapmak yasaktır.
• Din, dil, ırk ve siyaset hakkında konuşmak yasaktır.
• Herkes birbirine saygılı davranmalıdır.
• Sunucu ayarları hakkında bir değişiklik istenemez.
• Kimsenin tercihi kimseyi ilgilendirmez.
• Tartışma çıkarmak, tartışmaya dahil olmak yasaktır.
• Yönetimce verilen kararlara veya sisteme karşı çıkılamaz. Ancak aşırıya kaçılmadığı sürece görüş belirtilebilir.
• Başkalarını rahatsız edecek davranışlarda bulunmak yasaktır.
• Kimse başka bir kişiye üstünlük gösteremez.
• Aşırı derecede emoji ve büyük harf kullanımı yasaktır.
• Ahlaka karşı davranışlar sergilemek yasaktır.
• Başkalarını rahatsız etmek yasaktır.
• Trol davranışlar sergilemek yasaktır.
• Başta yetkililer olmak üzere kullanıcılara saygısızlık yapmayın.
• Oynuyor.. kısmına küfür, reklam vb. içerikler yazmak yasaktır.
• Bot komutlarını genel sohbete yazmak yasaktır!
• Herkes kuralları okumuş olarak sayılır ve ona göre davranışlarını yapması gerekir!`
    )
    .setImage(
      "https://media.discordapp.net/attachments/830162542495531092/833016414402773002/Kurallar.png"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/822603993670615072/a1f0c783395132c70d7bde6c80b370cf.png?size=128"
    );
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "kurallar",
  description: "kuralları atar",
  usage: "!kurallar"
};
