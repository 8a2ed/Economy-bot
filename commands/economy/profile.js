const { MessageEmbed } = require('discord.js')
const prefix = require('../../config.json').prefix
const db = require('quick.db')
module.exports = {
    name : 'profile',
    category : 'economy',
    description : '',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

        if (user.user.bot) return message.channel.send(`You can't use this command with bot.`);

        let money = db.fetch(`money_${user.id}`)
        if (money === null) money = 0;

        let bank = db.fetch(`bank_${user.id}`)
        if (bank === null) bank = 0;

        let bio = db.fetch(`info_${user.id}`);
        if (bank === null) bio = `${prefix}setbio`

        let bronze = db.fetch(`bronze_${user.id}`);
        if (bronze === null) bronze = 0;

        let silver = db.fetch(`silver_${user.id}`);
        if (silver === null) silver = 0;

        let diamond = db.fetch(`diamond_${user.id}`)
        if (diamond === null) diamond = 0;

        let cars = db.fetch(`car_${user.id}`);
        if (cars === null) cars = 0;

        let house = db.fetch(`house_${user.id}`);
        if (house === null) cars = 0;

        let ring = db.fetch(`ring_${user.id}`);
        if (ring === null) ring = 0;

        const embed = new MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`> User: ${user} | ${user.user.tag} | ${user.id}\n> Money: ${money}\n> Bank: ${bank}\n> Bronze ranks: ${bronze}\n> Silver ranks: ${silver}\n> Diamond ranks: ${diamond}\n> Cars: ${cars}\n> Houses: ${house}\n> Rings: ${ring}\n__Bio__: ${bio}`)

        message.channel.send(embed)
    }
}
