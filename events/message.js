const card = require('../commands/card');
const classes = require('../commands/classes');
const sets = require('../commands/sets');
const types = require('../commands/types');
const factions = require('../commands/factions');
const qualities = require('../commands/qualities');
const races = require('../commands/races');
const search = require('../commands/search');
const math = require('../commands/math');

module.exports = (client, message) => {
    if (message.content.startsWith('!card')) {
        return card(message);
    }
    if (message.content.startsWith('!classes')) {
        return classes(message);
    }
    if (message.content.startsWith('!sets')) {
        return sets(message);
    }
    if (message.content.startsWith('!types')) {
        return types(message);
    }
    if (message.content.startsWith('!factions')) {
        return factions(message);
    }
    if (message.content.startsWith('!qualities')) {
        return qualities(message);
    }
    if (message.content.startsWith('!races')) {
        return races(message);
    }
    if (message.content.startsWith('!search')) {
        return search(message);
    }
    if (message.content.startsWith('!math')) {
        return math(message);
    }
  }