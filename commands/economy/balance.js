const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = {
    name : 'balance',
    aliases: ["bal"],
    category : 'economy',
    description : 'Shows your balance.',
    usage: 'balance <user>',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r =>
          r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.member;

      if(user.user.bot) return message.channel.send(`You can't use this command with bot.`);

    let bal = db.fetch(`money_${user.id}`);

    if (bal === null) bal = 0;

    let bank = await db.fetch(`bank_${user.id}`);

    if (bank === null) bank = 0;

    if (user) {

      let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `${user.user.username}'s Balance\n\nPocket: \`${bal}\`\nBank: \`${bank}\``
        );

      message.channel.send(embed);
    } else {
      return message.channel.send("Invalid user.");
    }
    }
}
