/*
----------------INFO----------------------
This bot was made by SSORIN.
Discord:SSORIN#8937
It was my first bot ever made,I think I made it in february 2019.
I made way more discord bots til that time and I am now more
experienced in this.
If you need a discord bot,feel free to contact me.
If you have problems with this bot,contact me.
----------------INSTALLATION---------------
You need node.js installed.
Open the node.js command prompt and execute this in this folder:
--------------------------
npm i discord.js --save
--------------------------
Then go to botconfig.json and change the token and prefix.

*/
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  bot.user.setActivity("!help", {type: "PLAYING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(' ');
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

//Generator
if(cmd === `${prefix}genspotify`)
{
  //message.channel.send("Restocking! Please wait.");
  message.channel.send("Sent your account in the DMs. \n Please wait 24 hours before generating another one.");
  number = 0; //Put the number of files you have
  accountNumber = Math.floor(Math.random()*0);
  return message.member.send("Here is your spotify account:", { files: ["./accounts/" + accountNumber + ".txt"] });
}

//Help command
if(cmd === `${prefix}help`)
{
  message.channel.send("```Here are the commands we have now: \n !genspotify \n !win10 \n !genminecraft \n !genpornhub \n !genfortnite \n !genroblox \n !genrobux```");
}

if(cmd === `gay`)
{
  message.channel.send("no u");
}

if(cmd === `${prefix}genminecraft`)
{
  message.channel.send("Sent you some information in the DMs.");
  message.member.send("Here is what you need for the Minecraft Premium Account: \n ``` ->Minecraft Launcher from minecraft.net \n ->This MCLeaks Authenticator: \n https://mcleaks.net/authenticator?startwindownload \n ->A brain \n ->Some patience``` \n Here are the steps to install: \n  ``` ->Windows users: Open the downloaded Setup-file and the Authenticator will start automatically. \n ->MacOS users: Unpack the downloaded ZIP-file and open the unpacked MCLeaksAuthenticator.app file. \n ->Select the button MCLeaks to use MCLeaks alts. \n ->To redeem and use an MCLeaks alt just insert the ALT-Token into the Username textfield and some random letters into the Password textfield of your launcher and press login. \n ->The launcher will automatically log you in with the MCLeaks alt. Have fun :)``` \n To use your own account again select the Mojang button. \n Please visit https://mcleaks.net/ for more information!");
}

if(cmd === `no`)
{
  message.channel.send("no u");
}

if(cmd === `${prefix}genrobux`)
{
  message.channel.send("Rlly?");
  return message.member.send("Wow", { files: ["./troll/" + "giphy" + ".gif"] });
}

if(cmd === `${prefix}genfortnite`)
{
  message.channel.send("I like your dreams :)");
}

if(cmd === `${prefix}genpornhub`)
{
  message.channel.send("Horny?");
  message.channel.send("Sadly,we only have spotify accounts right now.");
}

if(cmd === `${prefix}win10`)
{
  message.channel.send("Something went wrong while adding this,SSorin is gonna fix this later.");
  //message.member.send("Here are the steps for the Windows 10 Activation: \n 1.Visit bit.ly/windows10txt. \n 2.Copy the content into a new text document" + { files: ["./win10/" + "notepad" + ".png"]} + "\n 3.You save it as a batch file , name “windows10.cmd”" + { files: ["./win10/" + "save" + ".png"]} + { files: ["./win10/" + "cmd" + ".png"]} + "\n 4.Run the batch file as administrator." + { files:["./win10/" + "admin" + "png"]} + "You can see the result" + { files:["./win10/" + "result" + ".png"]} + "If it says Connection to the KMS server failed,just wait. \n Run this program for 5 minutes then restart your pc.");
}

if(cmd === `${prefix}genmodernwarefare`)
{
  //message.channel.send("Restocking! Please wait.");
  message.channel.send("Sent a code in the DMs. \n Please wait 24 hours before generating another one.");
  number = 100;//Change the number of unused usernames here.
  accountNumber = Math.floor(Math.random()*100);
  return message.member.send("Here is the code:", { files: ["./roblox/" + accountNumber + ".txt"] });
}

});


bot.login(botconfig.token);
