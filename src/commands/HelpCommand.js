const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js')

class HelpCommand extends Command {
    constructor() {
        super('help', {
           aliases: ['help'], 
           args: [
               {
                    id: 'page',
                    type: 'number'
               }
           ],
           
        });
    }

    exec(message, args) {
        const prefix = '-'
        if (args.page === 1 || !args.page){
            const helpEmbed = new MessageEmbed() 
            .setColor('#aa1bf2')
            .setTitle('Server Info')
            .setThumbnail(message.guild.iconURL())
            .addFields(
                { name: `${prefix}ping`, value: `check bot\'s ping`},
                { name: `${prefix}server`, value: 'tells you server info'},
                { name: `${prefix}ticket`, value: 'makes a ticket for you'},
                { name: `${prefix}endticket`, value: 'deltes your ticket or deletes someone else ticket, Usage: -enticket or -enticket <UserID>'},
                { name: `${prefix}member`, value: 'tells you how many members and split them between bots and user, Aliases: member, members'}
            )
            .setFooter('1-4 | -help 2')   
            message.channel.send(helpEmbed)
        } else if (args.page === 2){
            const help2Embed = new MessageEmbed() 
            .setColor('#aa1bf2')
            .setTitle('Server Info')
            .setThumbnail(message.guild.iconURL())
            .addFields(
                { name: `${prefix}clear`, value: `deletes a certain amount of messages between 1-100 based on the second argument`},
                { name: `${prefix}kick`, value: 'kicks the person mentioned in the second argument of this command'},
                { name: `${prefix}ban`, value: 'bans the person mentioned in the second argument of this command'},
                { name: `${prefix}mute`, value: 'mute the person mentioned in the second argument'},
                { name: `${prefix}tempmute`, value: 'mute somone temporarily bases on the second using numbers, Usage: tempmute <UserID> 10ms'}
            )
            .setFooter('1-4 | -help 2') 
            message.channel.send(help2Embed) 
        }
        
        
    }
}

module.exports = HelpCommand;