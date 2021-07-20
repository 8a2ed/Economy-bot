const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("pretty-ms");

module.exports = {
        name: "daily",
        category: "economy",
        description: "",
    run: async (client, message, args) => {
        let user = message.author;

        let timeout = 86400000;
        let amount = 200;

        let daily = await db.fetch(`daily_${user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            let timeEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`You can collect your daily again in ${time}.`);
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`You've collected your ${amount} from daily.`);
            message.channel.send(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.set(`daily_${user.id}`, Date.now())


        }
    }
}
