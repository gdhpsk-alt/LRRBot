
module.exports = {
    name: "messageCreate",
    execute(message) {
        const Discord = require("discord.js")
        var object = require("../JSON/commands.json").array
        const prefix = ".."
        let args = message.content.slice(prefix.length).split(/ +/);
        const cmd = args.shift().toLowerCase();
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
        if(cmd == "roulette") {
            var karthik;
            var levels = require("../JSON/levels.json")
            var number = parseInt(args[0])+1
            var numarray = []
            var random = Math.floor(Math.random() * Object.keys(levels).length-1)
            if(!args[0]) return message.reply("Please input the percentage you got");
            if(isNaN(parseInt(args[0])) && args[0] != "start" && args[0] != "end") return message.reply("Please input a valid number");
        /*if(args[0] != "end") {
            if(!object[message.author.id]) {
                object[message.author.id] = [
    
                ]
                karthik = object[message.author.id]
            } else {
                karthik = object[message.author.id]
            }
        }*/
            if(args[0] == "end" && !object[message.author.id]) {
                 return message.reply("Please start a roulette before you want to end it!")
            } else if(args[0] == "end" && object[message.author.id]) {
                delete object[message.author.id]
                console.log(object)
                return message.reply(`You have ended the roulette at ${number}%! Thanks for playing :)`)
            }

            if(args[0] == "start") {
                object[message.author.id] = [
    
                ]
                karthik = object[message.author.id]
                number = 1
            } else {
                if(parseInt(args[0]) < 0) return message.reply("Please input a valid whole number!");
                if(parseInt(args[0]) >= 101) return message.reply("Please input a percentage below 101%");
                if(parseInt(args[0]) == 100) {
                    delete object[message.author.id]
                    console.log(object)
                    return message.reply("Congratulations, you've completed the lrr roulette! Now quit gd smh")
                }
                if(parseInt(args[0]) < numarray[numarray.length-1]) return message.reply(`Please input a percentage above ${number}%!`)
            }
            if(object[message.author.id]) {
                karthik = object[message.author.id]
            
            for(let i = 0; i < Object.keys(levels).length; i++) {
            if(!karthik.includes(Object.keys(levels)[random])) {
                const embed = new Discord.MessageEmbed()
                .setTitle(`#${random+1} - ${Object.keys(levels)[random]} by ${Object.values(levels)[random].publisher}`)
                .setDescription(`You have to get ${number}%`)
                .setImage(`https://i.ytimg.com/vi/${Object.values(levels)[random].ytcode}/mqdefault.jpg`)
                .setURL(`https://www.youtube.com/watch?v=${Object.values(levels)[random].ytcode}`)
                message.reply({embeds: [embed]})
                numarray.push(number)
                karthik.push(Object.keys(levels)[random])
                console.log(JSON.stringify(object))
                break;
            } else {
                random = Math.floor(Math.random() * Object.keys(levels).length-1)
                continue;
            }
        }
    } else {
        message.reply("Please start the roulette!")
    }
        }
    }
}