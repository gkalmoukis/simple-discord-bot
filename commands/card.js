var unirest = require('unirest');// rapid api sdk
const {Attachment} = require('discord.js');
var string_tools = require('../functions/manipulate_string');
module.exports = message => {
    //todo: Optional Parameters
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${string_tools.requested_name(message)}`)
        .header("X-RapidAPI-Key", "c0b422b7d9mshcdd1a3320f7f68bp1762dejsnd3329ec2021c").end(function (result) {
        
            // create attachment with da gold image
            const attachment = new Attachment(result.body[0].imgGold);

            // Send card information and the attachment in the message channel
            message.channel.send(string_tools.card_info(result.body[0]),attachment);
    });
};