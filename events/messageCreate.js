
module.exports = {
    name: "messageCreate",
    execute(message) {
        var allowedChannels = [
            "671454973346840616"
        ]
        if(message.author.bot) return;
        if(message.channel.type != "DM") {
            if(!allowedChannels.includes(message.channel.id)) return;
        }
        if(message.content.toLowerCase() == "femboy") {
            message.reply("OwO UwU")
        } 
        if(message.content.toLowerCase() == "fake skill") {
            message.reply("🤮")
        }
         if(message.content.toLowerCase().includes("360")) {
            message.reply("All y'all high refresh players who think Sonic Wave is easier then Erebus, first of all shut the fuck up and 2nd of all of the wave plays by itself for you guys.")
        } 
        if(message.content.toLowerCase().includes("fluked")) { 
            message.reply("https://cdn.discordapp.com/attachments/908882016345395241/911898128448364544/You.gif")
        }
        if(message.content == "..check") {
            var levels = require("../JSON/levels.json")
            var leaderboard = require("../JSON/leaderboard.json")
            var array = []
            var array2 = []
            var array3 = []
            for(let i = 0; i < Object.keys(levels).length; i++) {
                for(let j = 0; j < Object.values(levels)[i].list.length; j++) {
                    array.push(`${Object.values(levels)[i].list[j].name}, ${Object.values(levels)[i].name}`)
                }
            }
            for(let i = 0; i < Object.keys(leaderboard).length; i++) {
                for(let j = 0; j < Object.values(leaderboard)[i].levels.length; j++) {
                    array2.push(`${Object.keys(leaderboard)[i]}, ${Object.values(leaderboard)[i].levels[j]}`)
                }
            }
            for(let i = 0; i < array.length; i++) {
                if(!array2.includes(array[i])) {
                    array3.push(`${array[i]}`)
                }
            }
            array3.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
            var f = ""
            for(let i = 0; i < array3.length; i++) {
                f += `${array3[i]}\n`
            }
            //const fs = require("fs")
            /*fs.appendFile("../fix.txt", f, function (err) {
                if(err) console.log(err)
            })*/
            console.log(f)
            message.channel.send("Worked Successfully")
        }
        if(message.content == "..roulette") {
            var levels = require("../JSON/levels.json")
            var array = []
            var random = Math.floor(Math.random() * Object.keys(levels).length-1)
            if(!array.includes(Object.keys(levels)[random])) {
                message.reply(`#${random+1}. ${Object.keys(levels)[random]}, you have to get ${array.length+1}%`)
                array.push(Object.keys(levels)[random])
            }
        }
    }
}