const Discord = require("discord.js")
module.exports = {
    name: "interactionCreate",
    async execute(interaction) {
		var allowedChannels = [
            "671454973346840616"
        ]
        if(!interaction.isCommand() || interaction.user.bot) return
		if(interaction.channel.type != "DM") {
			if(!allowedChannels.includes(interaction.channel.id)) return
		}
	const command = interaction.client.commands.get(interaction.commandName)
	if(!command) return;
	try {
		await command.execute(interaction, Discord, interaction.client)
	} catch (err) {
		if(err) {
			console.log(err)
			await interaction.reply({content: "An error occured while trying to execute this command.", ephemeral: true})
		}
	}
    }
}