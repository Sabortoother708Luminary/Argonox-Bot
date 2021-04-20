const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js')

class ServerCommand extends Command {
    constructor() {
        super('server', {
           aliases: ['server'] 
        });
    }

    exec(message) {
        
        const serverEmbed = new MessageEmbed() 
            .setColor('#aa1bf2')
            .setTitle('Server Info')
            .setThumbnail(message.guild.iconURL())
            .addFields(
                { name: 'Server Name', value: `${message.guild.name}`},
                { name: 'Users', value: message.guild.members.cache.filter(m => !m.user.bot).size},
                { name: 'Bots', value: message.guild.members.cache.filter(m => m.user.bot).size},
                { name: 'ID', value: message.guild.id},
                { name: 'Verify Level', value: message.guild.verificationLevel}
            )
        
        message.channel.send(serverEmbed)
    }
            
        
            
        
    
}

module.exports = ServerCommand;