var unirest = require('unirest');// rapid api sdk
module.exports = message => {
    unirest.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/info")
        .header("X-RapidAPI-Key", "c0b422b7d9mshcdd1a3320f7f68bp1762dejsnd3329ec2021c").end(function (result) {
        console.log(result.status, result.headers, result.body);
        message.channel.send(result.body.races);
    });
};