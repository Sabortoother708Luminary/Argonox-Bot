const { Command } = require('discord-akairo');


class EndTicketCommand extends Command {
    constructor() {
        super('endticket', {
           aliases: ['endticket'] ,
           clientPermissions: ['MANAGE_CHANNELS'],
           args: [
            {
                id: 'member',
                type: 'member'
            }
        ],
        });
    }

 async exec(message, args) {
        if (!args.member) {
            const user = message.author.id;
            const name = "ticket" + user;
            const fetchedChannel = message.guild.channels.cache.find(ch => ch.name == name);
            
            if(message.guild.channels.cache.find(ch => ch.name == name)){
            fetchedChannel.delete()
            message.author.send('Succefully deleted the ticket')
            } else {
            message.reply('You haven\'t created a ticket yet!')
            }
        } else {
        
            const memberChannel = message.guild.channels.cache.find(ch => ch.name == "ticket" + args.member);
             if (memberChannel) {
                 memberChannel.delete()
                 message.author.send('Succefully deleted the ticket')
            } else {
                return message.reply("Either the user doesn't exists or they haven't created a ticket!")
            }    
            
            
        }
        
    }
}

module.exports = EndTicketCommand;