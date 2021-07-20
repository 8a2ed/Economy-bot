const { MessageEmbed } = require('discord.js');
const prefix = require('../../config.json').prefix;
const db = require('quick.db');

module.exports = {
        name: "store",
        category: "economy",
        description: "",
    run: async (client, message, args) => {
        
      
        let embed = new MessageEmbed()
            .setDescription(`**Ranks**:\n\nBronze: 200 Coins.\nSilver: 500 Coins.\nGold: 1000 Coins.\nDiamond: 5000 Coins.\n\n**Items:**\n\nCar: 2000 Coins.\nHouse: 5000 Coins.\nRing: 1500 Coins.`)
            .setColor("RANDOM")
        message.channel.send(embed)
    }
}