const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";
client.login("NzI3NjYyOTEzODU0Mzc0MDMw.XvvG-w.6fgDv5drcw1dqIiPTKSQRxwhdys");

let clearValue;

client.on('ready', () => {
    client.user.setStatus('DND')
    client.user.setActivity('Aucune Limite'); 
    console.log('démarage du cul de ta soeur !');
});

client.on('message', (message) => {
  if(message.member.roles.cache.find(r => r.id === '727675666090426410'))
  if(message.content == '!clean'&& message.member.roles.cache.find(r => r.id === '727675666090426410'))
  {
      message.channel.messages.fetch({ limit: clearValue}).then(messages => {
          message.channel.bulkDelete(messages
      )});
  }
});




  client.on('message', (message) => {
    if(message.content.startsWith('!kick'))
    {
        if(message.member.roles.cache.find(r => r.id === '727675666090426410'))
        {
            var member = message.mentions.members.first();
            member.kick().then((member) =>
            {
                message.reply('Le membre **' + member.displayName + '** a été expulsé avec succès !');
            }).catch(() => {
                message.reply('Un problème est survenu !');
            });
        }
    }
});

client.on('message', (message) => {
    if(message.content.startsWith('!ban'))
    {
        if(message.member.roles.cache.find(r => r.id === '727675666090426410'))
        {
            var member = message.mentions.members.first();
            member.ban().then((member) =>
            {
                message.reply('Le membre **' + member.displayName + '** a été expulsé avec succès !');
            }).catch(() => {
                message.reply('Un problème est survenu !');
            });
        }
    }
});


  

client.on('message', (message) => {
    if(message.content === 'landy') {
        message.reply('Assa Baing')
    };
});

client.on("message", msg => {
    if (msg.content.toLowerCase().startsWith(prefix + "help")) {
                   const embed = new Discord.MessageEmbed()
                  .setTitle(':gear: - Liste de commande')
                  .setColor('RANDOM')
                  .addField(":tools: all people", "`!pdp` - pour avoir le lien de sa pdp")
                  .addField(":tools: Modération", "`!ban` - Bannir un membre du serveur \n`!kick` - Expulser un membre du serveur -  \n`!clean` - pour clean le channel \n`!clear ` - pour supprimer un nombre de messages définie !")
                  .setFooter("D'autre commande vont être ajouté ou modifié ou encore supprimé.")
               
              msg.channel.send(embed)
    }
    
    
  });


  




  var bannedwords = "fdp,ntm,tg,tagueule,fils de pute,ta mère la pute".split(",");

  client.on("message", msg => {
    if (msg.guild === null) return;
  
    for (i=0;i<bannedwords.length;i++) {
      if (msg.content.toLowerCase().includes(bannedwords[i])) {
        msg.delete();
        msg.reply(":warning: Merci de ne pas insulter !");
        return;
      }
    }
  

 
    if (!msg.member.hasPermission("ADMINISTRATOR")) return;

    if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
      var mem = msg.mentions.members.first();
      if (msg.guild.roles.cache.get("727671770944897076")) {
        mem.roles.add(msg.guild.roles.cache.get("727671770944897076")).then(() => {
          msg.channel.send(":white_check_mark: " + mem.displayName + " Va bien femer sa geule !");
        }).catch(e => {
          msg.channel.send(":x: Une erreur à été détecté vérifier votre commande");
          console.log(e);
        });
  
      }
    }
    if (msg.content.toLowerCase().startsWith(prefix + "unmute")) {
      var mem = msg.mentions.members.first();
      if (msg.guild.roles.cache.get("727671770944897076")) {
        mem.roles.remove(msg.guild.roles.cache.get("727671770944897076")).then(() => {
          msg.channel.send(":white_check_mark: " + mem.displayName + " Vsii parle batard !");
        }).catch(e => {
          msg.channel.send(":x: Une erreur à été détecté vérifier votre commande");
          console.log(e);
        });
  
      }
    }
  
    
    
  });
     
     
  
  client.on("message", msg => {
  
  if (msg.content.startsWith("<@!719673956293935115>")) {
     msg.reply("Ta gueule")
    console.log("Une personne vient de mentionner Ramseey")
  }
    
  });




  client.on("message", msg => {
    if (msg.content.startsWith(prefix + "warn")) {
        var args = msg.content.substring(prefix.length).split(' ');
if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Vous n'avez pas la permission de faire ceci");
let reason = args.slice(1).join(' ');
let user = msg.mentions.users.first();
if (msg.mentions.users.size < 1) return msg.reply('Veuillez mentionner une personne !');
if (reason.length < 1) return msg.reply("Merci d'entrez une raison !");

let dmsEmbed = new Discord.MessageEmbed()
.setTitle(":warning: Avertissement")
.setColor("#00ff00")
.setDescription(`:x: Vous avez été averti sur le serveur : \`${msg.guild.name}\``)
.addField(":bust_in_silhouette: Averti par :", msg.author.tag)
.addField(":strawberry: Raison :", reason);



msg.delete();

          let logsEmbed = new Discord.MessageEmbed()
.setTitle(":warning: Avertissement")
.setColor("#00ff00")
.setDescription(`:x: Un utilisateur à été avertis !`)
.addField(":smiling_imp: Membre averti :", `${user.username}`)
.addField(":bust_in_silhouette: Averti par :", msg.author.tag)
.addField(":strawberry: Raison :", reason);
        
client.channels.cache.get(`727675997540974693`).send(logsEmbed)
        
   
msg.channel.send(`:white_check_mark: ${user.tag} à été averti !`)
}
});



  client.on('message', message => {
    if (message.content === '!pdp') {
      message.reply(message.author.displayAvatarURL());
    }
  });



  client.on("message", msg => {
    if (!msg.member.hasPermission("ADMINISTRATOR")) return;
    if (msg.content.toLowerCase().startsWith(prefix + "clear")) {
      const args = msg.content.split(' ').slice(1); // All arguments behind the command name with the prefix
      const amount = args.join(' '); // Amount of messages which should be deleted
      
      if (!amount) return msg.reply(':x: Merci de donnez un nombre de message à supprimer !'); // Checks if the `amount` parameter is given
      if (isNaN(amount)) return msg.reply(":x: Ce n'est pas un chiffre !"); // Checks if the `amount` parameter is a number. If not, the command throws an error
      
      if (amount > 100) return msg.reply(':x: Vous ne pouvez pas supprimez plus de 100 messages !'); // Checks if the `amount` integer is bigger than 100
      if (amount < 1) return msg.reply(':x: Vous devez supprimer au moins 1 message !'); // Checks if the `amount` integer is smaller than 1
      
          msg.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
         msg.channel.send(":white_check_mark: `" + amount + "` messages ont été supprimés !")
            msg.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
        
                                )});
        }
      });


      client.on('message', (message) => {
        if(message.content === '!landy') {
        message.delete()
          message.reply('https://www.youtube.com/channel/UCo--_7Q6EK7thiy8J2BVZVQ')
        };
    });



      const { Client, MessageEmbed } = require('discord.js');
const { send } = require('process');

    

      client.on('message', message => {
      
        if (message.content === 'utopia') {

          const embed = new MessageEmbed()
      
            .setTitle('Pour rejoindre le discord utopia')
      
            .setColor(0xff0000)
          
            .setDescription('https://discord.gg/Ej9M4TM');
    
          message.channel.send(embed);
        }
      });

      client.on('guildMemberAdd', member => {
        const channel = member.guild.channels.cache.find(ch => ch.name === 'arrivée');
        if (!channel) return;
        channel.send(`**bienvenue le sang**, ${member}`);
      });

      client.on ( "guildMemberRemove" ,  ( member )  =>  { 
        const channel = member.guild.channels.cache.find(ch => ch.name === 'départ');
        if (!channel) return;
        channel.send(`**salam le sang**, ${member}`);
      });



      client.on('message', message => {
      
        if (message.content === '!utopia') {

          const embed = new MessageEmbed()
      
            .setTitle('Pour se connecter a utopia')
      
            .setColor(0xff0000)
          
            .setDescription('Dans le menu FiveM, faites F8 puis marquez connect utopiacity.fr');
    
          message.channel.send(embed);
        }
      });


      client.on("message", msg => {

        if (msg.channel.id === '727673961072295967') {
      
      if (msg.content.startsWith(prefix + "prise")) {
         msg.reply("vient de prendre son service !")
        console.log("Une personne vient de prendre son service !")
      }
        }
      });
      
      client.on("message", msg => {
      
        if (msg.channel.id === '727790239367692368') {
      if (msg.content.startsWith(prefix + "rendu")) {
         msg.reply("indique le nombre de réa que tu as fais ci-dessous")
        console.log("Une personne vient de finir son service !")
      }
        }
      });

    

      client.on("message", msg => {

        if (!msg.member.hasPermission("ADMINISTRATOR")) return;
    
        if (msg.content.toLowerCase().startsWith(prefix + "staff")) {
          var mem = msg.mentions.members.first();
          if (msg.guild.roles.cache.get("727676419697672222")) {
            mem.roles.add(msg.guild.roles.cache.get("727676419697672222")).then(() => {
              msg.channel.send(":white_check_mark: " + mem.displayName + " wsh le kho!");
            }).catch(e => {
              msg.channel.send(":x: Une erreur à été détecté vérifier votre commande");
              console.log(e);
            });
      
          }
        }


      })
        
      
    
    
      client.on("message", msg => {
  
        if (msg.content.startsWith("<@!551548972154748989>")) {
           msg.reply("MP le pour + d'info !")
          console.log("Une personne vient de mentionner Ramseey")
        }
          
        });


  


