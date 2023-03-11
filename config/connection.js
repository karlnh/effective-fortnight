const { connect, connection } = require('mongoose');

const dbURI = "127.0.0.1:27017/socnetDB";

// wrapping mongoose around local connection to MongoDB
connect(`mongodb://${dbURI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;