const { Command } = require('discord-akairo');

class TicketCommand extends Command {
    constructor() {
        super('ticket', {
           aliases: ['ticket'] 
        });
    }

    exec(message) {
        const user = message.author.id;
        const name = "ticket" + user;

            if(message.guild.channels.cache.find(ch => ch.name == name)){
                message.channel.send("You already have a ticket open")
            } else {
                message.guild.channels.create(name).then((chan) => {
                    chan.updateOverwrite(message.guild.roles.everyone, {
                        SEND_MESSAGE: false,
                        VIEW_CHANNEL: false,
                    })
                    chan.updateOverwrite(user, {
                        SEND_MESSAGE: true,
                        VIEW_CHANNEL: true,
                    })
                    message.channel.send('Ticket has been created')
                    chan.send('Support will be with you Shortly').then((m)=> {
                        m.pin
                    })
                })
            }
    }
}

module.exports = TicketCommand;