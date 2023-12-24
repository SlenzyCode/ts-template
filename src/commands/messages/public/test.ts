import Discord from "discord.js";

const data = {
    name: "test",
    description: "test",
    cooldown: 10,
    permissions: [],
    execute(message: any) {
        const embed = new Discord.EmbedBuilder()
            .setColor("Blue")
            .setTitle("Bot Çalışıyor")
            .setDescription(`Bot çalışıyor.`)
        message.reply({ embeds: [embed] });
    }
}

const slashData = {
    name: data.name,
    description: data.description
}

export { data, slashData }