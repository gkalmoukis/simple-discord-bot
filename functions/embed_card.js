module.exports = json => {
    var text = (( typeof json.text !== 'undefined') ? `${json.text}` : `-` );
    var artist = (( typeof json.artist !== 'undefined') ? `${json.artist}` : `Unknown artist` );
    var fields = [];
    if(typeof json.flavor !== 'undefined'){
        fields.push({name:'Flavor',value:`${json.flavor}`,inline: false});
    }
    if(typeof json.type !== 'undefined'){
        fields.push({name:'Type',value:`${json.type}`,inline: true});
    }
    if(typeof json.rarity !== 'undefined'){
        fields.push({name:'Rarity',value:`${json.rarity}`,inline: true});
    }
    if(typeof json.cardSet !== 'undefined'){
        fields.push({name:'Set',value:`${json.cardSet}`,inline: true});
    } 
    if(typeof json.faction !== 'undefined'){
        fields.push({name:'Faction',value:`${json.faction}`,inline: true});
    } 
    if(typeof json.race !== 'undefined'){
        fields.push({name:'Race',value:`${json.race}`,inline: true});
    }
    if(typeof json.playerClass !== 'undefined'){
        fields.push({name:'Class',value:`${json.playerClass}`,inline: true});
    }
    if(typeof json.cost !== 'undefined'){
        fields.push({name:'Cost',value:`${json.cost}`,inline: true});
    }
    if(typeof json.attack !== 'undefined'){
        fields.push({name:'Attack',value:`${json.attack}`,inline: true});
    }
    if(typeof json.health !== 'undefined'){
        fields.push({name:'Health',value:`${json.health}`,inline: true});
    }
    if(typeof json.elite !== 'undefined'){
        fields.push({name:'Elite',value:`Yes`,inline: true});
    }else {
        fields.push({name:'Elite',value:`No`,inline: true});
    }
    if(typeof json.collectible !== 'undefined'){
        fields.push({name:'Collectible',value:`Yes`,inline: true});
    }else {
        fields.push({name:'Collectible',value:`No`,inline: true});
    }
    const embed = {
        color: 0x0099ff,
        title: `${json.name}`,
        url: '',
        author: {
            name: 'Card info',
            icon_url: 'https://i.imgur.com/wSTFkRM.png',
            url: '', 
        },
        description: `${text}`,
        fields: fields,
        image: {
            url: `${json.img}`,
        },
        
        timestamp: new Date(),
        footer: {
            text: `${artist}`  
        },
    };
    return embed;
};