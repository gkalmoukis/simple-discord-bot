// load math.js
const math = require('mathjs')
var string_tools = require('../functions/manipulate_string');
module.exports = message => {
    try {
        message.reply(`Result: ${math.eval(string_tools.requested_expression(message))}`);
    }
    catch (err) {
        message.reply(`${err.toString()}`);
    }
    
};