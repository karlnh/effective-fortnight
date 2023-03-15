const { connect, connection } = require('mongoose');

connect('mongodb://localhost/usersAndThoughts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
