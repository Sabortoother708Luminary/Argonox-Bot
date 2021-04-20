const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
require('dotenv').config();
const storage = require('node-persist');



class MyClient extends AkairoClient {
    
    

    constructor() {
        super({
            
            ownerID: '827324151831855144'
        }, {
            disableMentions: 'everyone'
        });
        this.commandHandler = new CommandHandler(this, {
            directory: './src/commands/',
            prefix: '-'
        
        });
        this.listenerHandler = new ListenerHandler(this, {
            directory: './src/listeners/'
        });
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();
        this.commandHandler.loadAll();
        
    }
    
   
}


module.exports = MyClient; 
