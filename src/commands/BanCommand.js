const { Command } = require('discord-akairo');

class BanCommand extends Command {
    constructor() {
        super('ban', {
            aliases: ['ban'],
            args: [
                {
                    id: 'member',
                    type: 'member'
                }
            ],
            clientPermissions: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS'],
            channel: 'guild'
        });
    }

    async exec(message, args, clientPermissions) {
        
        if (!args.member) {
            return message.reply('No member found with that name.');    
        }
        if (!clientPermissions) {
            return message.reply('I lack the nesscary permissions to ban that person')
        }
        await args.member.ban();
        return message.reply(`${args.member} was banned!`);
    }
}

module.exports = BanCommand;