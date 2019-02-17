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
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${name}`)
        .header("X-RapidAPI-Key", "c0b422b7d9mshcdd1a3320f7f68bp1762dejsnd3329ec2021c").end(function (result) {
            console.log(result.status, result.headers, result.body);
            var res = "";
            result.body.forEach(element => {
                res += element.name+"\n";
            });
            message.channel.send(res);
        });
};