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
    else if (CheckIfAlreadyFixed(msg.content))
    {
        msg.channel.reply("Stop doing my job and let me fix it for you. I have one job... ONE JOB!");
    }
    else if (msg.content.includes("twitter.com") ) {
      fixedstring = msg.content.replace("twitter.com","fxtwitter.com");
      msg.channel.send(fixedstring);
    }
    else if (msg.content.includes("x.com") ) {
      fixedstring = msg.content.replace("x.com","fxtwitter.com");
      msg.channel.send(fixedstring);
    }
    else if (msg.content.includes("tiktok.com") ) {
      fixedstring = msg.content.replace("tiktok.com","vxtiktok.com");
      msg.channel.send(fixedstring);
    }
    else if (msg.content.includes("reddit.com") ) {
      fixedstring = msg.content.replace("reddit.com","vxreddit.com");
      msg.channel.send(fixedstring);
    }     
    else if (msg.content.includes("instagram.com") ) {
      fixedstring = msg.content.replace("instagram.com","ddinstagram.com");
      msg.channel.send(fixedstring);
    }     
    else {
        //msg.reply(msg.content);
    }
});

public boolean CheckIfAlreadyFixed(String message)
{
  if(message.includes("fxtwitter.com") ||
     message.includes("vxtwitter.com") ||
     message.includes("vxtiktok.com") ||
     message.includes("vxreddit.com") ||
     message.includes("ddinstagram.com"))
  {
    return true;
  }
  else 
  {
    return false;
  }
  
}
client.login(process.env.TOKEN); //login bot using token
