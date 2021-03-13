var config = {
    DB_HOST : process.env.DB_HOST || '127.0.0.1',
    DB_PORT : process.env.DB_PORT || 27017,
    DB_NAME : process.env.DB_NAME || 'persondb'      // REPLACE WITH YOUR DB NAME
}

module.exports = config;