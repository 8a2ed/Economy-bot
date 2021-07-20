const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const ms = require("pretty-ms");
const Jwork = require('../../texts/works.json');
const JworkR = Jwork[Math.floor(Math.random() * Jwork.length)];

module.exports = {
        name: "work",
        aliases: ["wr"],
        category: "economy",
        description: "",
    run: async (client, message, args) => {

        let user = message.author;
        let author = await db.fetch(`work_${user.id}`)

        let timeout = 1800000;

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));

            let timeEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`You can collect it again in ${time}.`);
            message.channel.send(timeEmbed)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            let embed1 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`${JworkR} \`${amount}\``)
            message.channel.send(embed1)

            db.add(`works_${user.id}`, 1)
            db.add(`money_${user.id}`, amount)
            db.set(`work_${user.id}`, Date.now())
        };
    }
};
