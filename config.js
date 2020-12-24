const convict = require('convict');
// Define schema
var config = convict({
    env: {
        doc: "The application environment.",
        format: ["production", "development", "test"],
        default: "development",
        env: "NODE_ENV"
    },
    prefix:{
        doc: "Bot prefix",
        format: "*",
        default: "!"
    },
    bot_token:{
        doc: "Bot secret token",
        format: "*",
        default: ""
    }
});
// Load environment dependent configuration
var env = config.get('env');
config.loadFile('./config/' + env + '.json');

// Perform validation
config.validate({allowed: 'strict'});
module.exports = config;