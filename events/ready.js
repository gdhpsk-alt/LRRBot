
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { guildId } = require("../config.json")
require("dotenv").config()
module.exports = {
    name: "ready",
    once: true,
    execute(client, commands) {
        console.log(`${client.user.tag} is online!`);
		client.user.setActivity("The LRR Demonlist Server", {type: "WATCHING"})

	const CLIENT_ID = client.user.id
	const rest = new REST({
		version: "9"
	}).setToken(process.env.token);

	(async () => {
		try {
			if(process.env.ENV === "production") {
				await rest.put(Routes.applicationCommands(CLIENT_ID), {
					body: commands
				})
				console.log("Slash Commands worked (globally)");
			} else {
				await rest.put(Routes.applicationGuildCommands(CLIENT_ID, guildId), {
					body: commands
				})
				console.log("Slash Commands worked (locally)"); 
			}
		} catch (err) {
			if(err) console.log(err)
		}
	})()
	/*client.guilds.fetch("904222136661577758").then(guild => {
		guild.channels.fetch("904222137278169099").then(msg => {
			msg.lastMessage.content
		})
	}) */
    }
}