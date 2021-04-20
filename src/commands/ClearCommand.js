const { Command } = require('discord-akairo');

class ClearCommand extends Command {
    constructor() {
        super('clear', {
            aliases: ['clear'], 
            args:  [  
                {
                    id: 'number',
                    type: 'number',
                    default: 0
                }
            ],
            clientPermissions: ['MANAGE_MESSAGES'],
            userPermissions: ['MANAGE_MESSAGES'],
            channel: 'guild'
        });
    }

    async exec(message, args) {
        
        if (!args.number) {
            return message.reply('You need to put a number!');
        }
        if (args.number > 100) {
            return message.reply('The number needs to be less than one-hundred!');
        }
        if (args.number < 1) {
            return message.reply('needs to be 1 or more and has to be a integer');
        }
     
        return await message.channel.messages.fetch({limit : args.number}).then(messages =>{
            message.channel.bulkDelete(messages);
            message.reply('Success')
        })
        
    }
}

module.exports = ClearCommand;