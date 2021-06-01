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
    channel.send('Minn Nicholas på at han må spise ')
  })

  middagsMelding.start()

  const jonaMelding = new cron.CronJob('00 00 16 * * *', () => {
    const channel = client.channels.cache.get('256480574917705728')
    channel.send(' Haachama chamaaaa ')
  })

  jonaMelding.start()

  const merkurNavn = new cron.CronJob('00 45 17 * * *', () => {{
    const merkur = client.users.cache.get('175638305063436288')
    merkur.setNickname("Nytt navn til deg")
  }})

  merkurNavn.start()



  client.on('message', msg => {
    if(msg.content === "!test") {
      msg.channel.send('Bot er aktiv')
    }
  })

  client.on('message', merkurMessage => {
    if(merkurMessage.author.id === "101771139361026048") {
      
       merkurMessage.guild.members.fetch("175638305063436288").then(member => {
         const newName = "testNavn"

         member.setNickname(newName)
       })

       
       

      
    }
  })

  client.on('message', merkurMessage1 => {
    if(merkurMessage1.author.id === "101771139361026048") {


      
        merkurMessage1.member.setNickname("Seb")
       

      
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