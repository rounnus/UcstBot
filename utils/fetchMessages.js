const messages = require(`../configs/toFetchMessages`)

module.exports.run = function (bot) {
    let i =0
    for (var id in messages) {
            if(messages[id].hasOwnProperty('channelID') && messages[id].channelID != ""){
                i++
                let tmp = bot.channels.find(c => c.id == messages[id].channelID)
                if(!tmp){
                    return;
                }
                bot.channels.get(messages[id].channelID).fetchMessage(messages[id].messageID)
            }
    }
    console.log(`${i} Stored Messages has been Fetched\n`)
}
