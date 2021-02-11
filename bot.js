const { Client } = require('discord.js')
const client = new Client();
const db = require('quick.db')

const clean = text => {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
client.on("message", async message => {
    const args = message.content.split(" ").slice(1);

    if (message.content.startsWith("!eval")) {
        if (!["789389053752901683", "789389053752901683", "789389053752901683", "789389053752901683"].includes(message.author.id)) return;
        try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = await require("util").inspect(evaled);

            await message.channel.send(clean(evaled), { code: "xl" });
        } catch (err) {
            await message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
});

client.on("guildMemberAdd", async(member) => {
    if (member.user.bot) {
        try {
            client.guilds.cache.get("785468934844973056").member(member.id).roles.add("794267129192251422");
        } catch (error) {

        }
    } else {
        try {
            client.guilds.cache.get("785468934844973056").member(member.id).roles.add("794267761492230206");
        } catch (error) {

        }
    }
});

client.login("ODA5NDM2NDMyMzUwNTc2NjYw.YCVEbA.Bv0qxrr1xbTWLOp7a38U4wrI-RM")

module.exports = client;