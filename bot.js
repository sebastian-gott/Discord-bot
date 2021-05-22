require('dotenv').config()
const cron = require('cron');

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on('message', msg => {
//     if (msg){
//         msg.delete()
        
       
        
//     }
// })

// client.on('typingStart', (channel, user)  => {
//   channel.send(`Ingen vil se det du skriver${user}`)
// } )




  const middagsMelding = new cron.CronJob('00 00 18 * * *', () => {
    const channel = client.channels.cache.get('256480574917705728')
    channel.send('Minn Randomfevva på at han må spise ')
  })

  middagsMelding.start()

  const jonaMelding = new cron.CronJob('00 00 16 * * *', () => {
    const channel = client.channels.cache.get('256480574917705728')
    channel.send(' Haachama chamaaaa ')
  })

  jonaMelding.start()

  const merkurNavn = new cron.CronJob('00 45 17 * * *', () => {{
    const merkur = client.users.cache.get('175638305063436288')
    merkur.setNickname("Penis i munn")
  }})

  merkurNavn.start()



  client.on('message', msg => {
    if(msg.content === "!test") {
      msg.channel.send('gay')
    }
  })

  client.on('message', merkurMessage => {
    if(merkurMessage.author.id === "175638305063436288") {
      merkurMessage.member.setNickname("Cock ass")
    }
  })





// client.on('message', async message => {
// 	// Join the same voice channel of the author of the message
// 	if (message.member.voice.channel) {
// 		const connection = await message.member.voice.channel.join();
// 	}
// });

// client.on('message', msg1 => {
//   if (msg1.author.id === "175638305063436288")  ){
//       msg.delete()   
//   }
// })



client.login(process.env.BOT_TOKEN);