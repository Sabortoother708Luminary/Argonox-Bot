const MyClient = require('./src/bot')
require('dotenv').config()

console.log("Logging in with token");
const client = new MyClient();
client.login(process.env.BOTTOKEN);