const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const prefix = require('../../config.json').prefix;

module.exports = {
        name: "buy",
        noalias: [""],
        category: "economy",
        description: "",
        usage: "[item]",
    run: async (client, message, args) => {
        let user = message.author;

      
        let author = db.fetch(`money_${user.id}`)

        let Embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`You need 200 coins to purchase Bronze rank.`);


        if (args.join(' ').toLocaleLowerCase() == 'bronze') {
            if (author < 200) return message.channel.send(Embed)

            await db.fetch(`bronze_${user.id}`);
            db.add(`bronze_${user.id}`, 1)

            let Embed2 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`Purchased.`);

            db.subtract(`money_${user.id}`, 200)

            
            message.channel.send(Embed2)

            let e = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`You need 500 coins to purchase Silver rank.`);


        } else if (args.join(' ').toLocaleLowerCase() == 'silver') {
            if (author < 500) return message.channel.send(Embed)

            await db.fetch(`silver_${user.id}`);
            db.add(`silver_${user.id}`, 1)

            let Embed2 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`Purchased.`);

            db.subtract(`money_${user.id}`, 500)

            
            message.channel.send(Embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'gold') {
          let ee = new MessageEmbed()
          .setColor(`RANDOM`)
          .setDescription(`You need 1000 coins to purchase Gold rank.`)

          if(author < 1000) return message.channel.send(ee)

          await db.fetch(`gold_${user.id}`);
          db.add(`gold_${user.id}`, 1)

          let pru = new MessageEmbed()
          .setColor(`RANDOM`)
          .setDescription(`Purchased.`)

          db.subtract(`money_${user.id}`, 1000)

          message.channel.send(pru)

        } else if (args.join(' ').toLocaleLowerCase() == 'diamond') {
          let ee = new MessageEmbed()
          .setColor(`RANDOM`)
          .setDescription(`You need 5000 coins to purchase Diamond rank.`)

          if(author < 5000) return message.channel.send(ee)

          await db.fetch(`diamond_${user.id}`);
          db.add(`diamond_${user.id}`, 1)

          let pru = new MessageEmbed()
          .setColor(`RANDOM`)
          .setDescription(`Purchased.`)

          db.subtract(`money_${user.id}`, 5000)

          message.channel.send(pru)
          } else if (args.join(' ').toLocaleLowerCase() == 'car') {
            let Embed3 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`You need 2000 coins to purchase Car.`);

            if (author < 2000) return message.channel.send(Embed3)

            await db.fetch(`car_${user.id}`)
            db.add(`car_${user.id}`, 1)

            let Embed4 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`Purchased.`);

            db.subtract(`money_${user.id}`, 2000)
            message.channel.send(Embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'house') {
            let Embed5 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`You need 5000 coins to purchase House.`);

            if (author < 5000) return message.channel.send(Embed5)

            await db.fetch(`house_${user.id}`)
            db.add(`house_${user.id}`, 1)

            let Embed6 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`Purchased.`);

            db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
            message.channel.send(Embed6)
        } else if (args.join(' ').toLocaleLowerCase() == 'ring') {
            let Embed7 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`You need 1500 coins to purchase Ring.`);

            if (author < 1500) return message.channel.send(Embed7)

            await db.fetch(`ring_${user.id}`)
            db.add(`ring_${user.id}`, 1)

            let Embed8 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`Purchased.`);

            db.subtract(`money_${user.id}`, 1500)
            message.channel.send(Embed8)
        } else {
            if (message.content.toLowerCase() === `${prefix}buy`) {
                let embed9 = new MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`Enter ${prefix}store, To see all items on store.`)
                return message.channel.send(embed9)
            }
        }
    }
}