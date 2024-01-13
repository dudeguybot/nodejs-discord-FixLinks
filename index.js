const Discord = require('discord.js'); //import client from discord
const keep_alive = require('./keep_alive.js');
const client = new Discord.Client();
let fixedText = "";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    // check if message isn't from us
    if (msg.author == client.user) {
      return;
    }
    else if (msg.content.includes("twitter.com") ) {
      fixedstring = x.replace("twitter.com","fxtwitter.com")
      msg.reply(fixedstring);
    }
    else if (msg.content.includes("x.com") ) {
      fixedstring = x.replace("x.com","fxtwitter.com")
      msg.reply(fixedstring);
    }
    else if (msg.content.includes("tiktok.com") ) {
      fixedstring = x.replace("tiktok.com","vxtiktok.com")
      msg.reply(fixedstring);
    }
    else if (msg.content.includes("reddit.com") ) {
      fixedstring = x.replace("reddit.com","vxreddit.com")
      msg.reply(fixedstring);
    }       
    else {
        //msg.reply(msg.content);
    }
});

client.login(process.env.TOKEN); //login bot using token
