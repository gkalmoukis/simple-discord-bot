var pluralize = require('pluralize');
module.exports = {
    card_info: function (json) {
        var info = "Card info";
        info += (( typeof json.name !== 'undefined') ? `\nName: ${json.name}` : `` );
        info += (( typeof json.type !== 'undefined') ? `\nType: ${json.type}` : `` );
        info += (( typeof json.cardSet !== 'undefined') ? `\nSet: ${json.cardSet}` : `` );
        info += (( typeof json.faction !== 'undefined') ? `\nFaction: ${json.faction}` : `` );
        info += (( typeof json.rarity !== 'undefined') ? `\nRarity: ${json.rarity}` : `` );
        info += (( typeof json.cost !== 'undefined') ? `\nCost: ${json.cost}` : `` );
        info += (( typeof json.attack !== 'undefined') ? `\nAttack: ${json.attack}` : `` );
        info += (( typeof json.health !== 'undefined') ? `\nHealth: ${json.health}` : `` );
        info += (( typeof json.race !== 'undefined') ? `\nRace: ${json.race}` : `` );
        info += (( typeof json.playerClass !== 'undefined') ? `\nPlayer: ${json.playerClass}` : `` );
        info += (( typeof json.elite !== 'undefined') ? `\nElite: ${json.elite}` : `` );
        info += (( typeof json.collectible !== 'undefined') ? `\nCollectible: ${json.collectible}` : `` );
        info += (( typeof json.flavor !== 'undefined') ? `\nFlavor: ${json.flavor}` : `` );
        info += (( typeof json.artist !== 'undefined') ? `\nArtist: ${json.artist}` : `` );
        return info;
    },
    search_results: function (json) {
        var results = `I found ${pluralize('card', json.length,true)}:`;
        json.forEach(element => {
            results += `\n${element.name}`;
        });
        return results;
    },
    requested_name: function(command){
        // Split string by whitespace character
        const split_string = command.content.split(" ");
        var name = "";
        for (let index = 1; index < split_string.length; index++) {
            name += split_string[index]+" ";
        }
        return name;
    },
    requested_expression: function(command){
        const split_string = command.content.split(" ");
        var expression = split_string[1];
        return expression;
    }
};