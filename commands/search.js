var unirest = require('unirest');// rapid api sdk
const {Attachment} = require('discord.js');
var string_tools = require('../functions/manipulate_string');
module.exports = message => {
    //todo: Optional Parameters
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${string_tools.requested_name(message)}`)
        .header("X-RapidAPI-Key", "c0b422b7d9mshcdd1a3320f7f68bp1762dejsnd3329ec2021c").end(function (result) {        
            message.channel.send(string_tools.search_results(result.body));
        });
};