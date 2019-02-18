var unirest = require('unirest');// rapid api sdk
const {RichEmbed,Attachment} = require('discord.js');
var string_tools = require('../functions/manipulate_string');
var embed = require('../functions/embed_card');
module.exports = message => {
    //todo: Optional Parameters
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${string_tools.requested_name(message)}`)
        .header("X-RapidAPI-Key", "c0b422b7d9mshcdd1a3320f7f68bp1762dejsnd3329ec2021c").end(function (result) {
            message.channel.send({ embed: embed(result.body[0])});
    });
};