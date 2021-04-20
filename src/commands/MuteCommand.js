const { Command } = require('discord-akairo');


class MuteCommand extends Command {
    constructor() {
        super('mute', {
           aliases: ['mute'],
           args: [
               {
                    id: 'member',
                    type: 'member'
               },
               {
                   id: 'reason',

               }
           ],
           clientPermissions: ['MUTE_MEMBERS'],
           userPermissions: ['MUTE_MEMBERS'],
           channel: 'guild'
        });
    }

    async exec(message, args, clientPermissions, userPermissions) {
        const role = message.guild.roles.cache.find(role => role.name === 'mute');
        const role2 = message.guild.roles.cache.find(role => role.name === 'Mute');
        
        if (!args.member) {
            message.reply('You need to specify a second argumenet ex. -mute <UserID>')
        }
        if (!clientPermissions) {
            message.reply('I lack the necessary permissions to mute people')
        }
        if (!userPermissions) {
            message.reply('You lack the necessary permissions to mute people')
        }
        if (!role) {
            if (!role2) {
                message.reply('you need to make a \'mute\' role!')
            } else {
                args.member.roles.add(role2)
                message.reply('Succefully muted the user!')
            }
            await args.member.roles.add(role)
            return message.reply('Succefully muted the user!')
        } 
        
        
        
    }
}

module.exports = MuteCommand;