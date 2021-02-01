const Discord = require('discord.js');
const client = new Discord.Client();
 //You can edit the prefix here
const prefix = '-';
 
client.commands = new Discord.Collection();
 
 //This prompts if the bot is online
client.once('ready', () => {
    console.log('Bot is online :)');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){

const apiPing = Math.round(message.client.ping);
const responseTime = Math.round(Date.now() - message.createdTimestamp); 

        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    } 
});
 //Paste your token here
client.login('Your Bot token');
