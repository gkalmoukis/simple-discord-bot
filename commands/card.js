var unirest = require('unirest');// rapid api sdk
const {Attachment} = require('discord.js');
module.exports = message => {
    //todo: Optional Parameters
    // Split string by whitespace character
    const splitString = message.content.split(" ");
    var name = "";
    for (let index = 1; index < splitString.length; index++) {
        name += splitString[index]+" ";
    }
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${name}`)
        .header("X-RapidAPI-Key", "c0b422b7d9mshcdd1a3320f7f68bp1762dejsnd3329ec2021c").end(function (result) {
        
            // create attachment with da gold image
            const attachment = new Attachment(result.body[0].imgGold);
        
            // build data string, todo in func and pretty 
            var cardData = `Name: ${result.body[0].name} 
                        Type: ${result.body[0].type} 
                        Faction: ${result.body[0].faction}
                        Rarity: ${result.body[0].rarity} 
                        Cost: ${result.body[0].cost} 
                        Attack: ${result.body[0].attack}
                        Health: ${result.body[0].health} 
                        Race: ${result.body[0].race} 
                        Player Class: ${result.body[0].playerClass} 
                        Elite: ${result.body[0].elite} 
                        Collectible: ${result.body[0].collectible}`;

            // Send the attachment in the message channel with a content
            message.channel.send(cardData,attachment);
    });
};