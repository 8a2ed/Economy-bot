const { MessageEmbed }= require("discord.js");
const db = require("quick.db");

module.exports = {
        name: "removemoney",
        aliases: ["rm"],
        category: "economy",
        description: "",
        usage: "[ mention | ID]",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR", "MANAGE_GUILD")) return message.channel.send("You don't have permission.");
        if (!args[0]) return message.channel.send("Mention user.")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("Mention a valid user.")

        if (!args[1]) return message.channel.send("Enter an amount.")
        if (isNaN(args[1])) return message.channel.send("Enter a valid amount.");
        let bal = await db.fetch(`money_${user.id}`)

        if (args[0] > bal) return message.channel.send("Cann't remove this amount.")
        db.subtract(`money_${user.id}`, args[1])
        let bal2 = await db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`User: ${user},\nAmount: ${args[1]},\nNew balance: ${bal2}.`);
        message.channel.send(moneyEmbed)

    }
}