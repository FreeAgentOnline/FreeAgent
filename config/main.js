module.exports = {
  // Secret key for JWT signing and encryption
  'secret': 'pass the baton',
  // Database connection information
  'database': 'mongodb://localhost:27017/free-agent',
  // Setting port for server
  'port': process.env.PORT || 3001
}
