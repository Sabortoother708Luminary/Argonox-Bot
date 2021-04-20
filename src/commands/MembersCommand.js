const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js')

class MembersCommand extends Command {
    constructor() {
        super('member', {
           aliases: ['member', 'members'] 
        });
    }

    exec(message) {
        
        const memberEmbed = new MessageEmbed() 
            .setColor('#aa1bf2')
            .setTitle('Members')
            .addFields(
                { name: 'Members', value: message.guild.memberCount, inline: true},
                { name: 'Users', value: message.guild.members.cache.filter(m => !m.user.bot).size, inline: true},
                { name: 'Bots', value: message.guild.members.cache.filter(m => m.user.bot).size, inline: true},
            )
        
        message.channel.send(memberEmbed)
    }
            
        
            
        
    
}

module.exports = MembersCommand;