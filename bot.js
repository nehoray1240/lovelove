const discord = require("discord.js");
const TOKEN = ("NDk4NTI4ODY2OTU3MTMxNzc2.DpvNmg.IpVIzAxigPTx30msaD5PyedckhI");
var bot = new discord.Client();
bot.on("ready", function () {
    console.log('G4E is online!');
});

bot.on("message", async message => {
    bot.user.setActivity(`LOVE`, { type: "PLAYING" });
if(message.content === '<@390246455052337152>     WE'){
    message.channel.send('<@390246455052337152>     LOVE')
}
});

bot.login(TOKEN);
