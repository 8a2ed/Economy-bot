const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
        name: "addmoney",
        category: "economy",
        description: "Adds Money to a user",
        usage: "addmoney [user] [amount]",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to user this command.");
        if (!args[0]) return message.channel.send("Mention user.")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("Invalid user.")
        if (!args[1]) return message.channel.send(`Enter an amount`)
        if (isNaN(args[1])) return message.channel.send(`${args[1]} is not a number.`);
        if(args[1].startsWith('-') || args[1].startsWith('/') || args[1].startsWith('*') || args[1].startsWith('+')) return message.channel.send(`Y${args[1]} is not a valid number.`)
        if (args[0] > 1000000) return message.channel.send("Limit: 1 million.")
        db.add(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Success:`)
            .setDescription(`User: ${user},\nAmount: ${args[1]},\nNew balance: ${bal}.`);
        message.channel.send(moneyEmbed)

    }
}