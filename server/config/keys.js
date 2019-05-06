// keys.js Figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
    // we are under production - return the prod key set
    module.exports = require('./prod');
} else {
    //we are in development - return the dev keys
    module.exports = require('./dev');
}