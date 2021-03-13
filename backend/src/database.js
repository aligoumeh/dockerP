let mongoose = require('mongoose')

let config = require("./config.js")
const DB_HOST = config.DB_HOST
const DB_PORT = config.DB_PORT
const DB_NAME = config.DB_NAME

class Database {
  constructor() {
    this._connect()
  }
  
  _connect() {
     mongoose.connect(`mongodb://${DB_HOST + ':' + DB_PORT}/${DB_NAME}`, { useNewUrlParser: true })
       .then(() => {
         console.log('Database connection successful to ' + DB_HOST + ':' + DB_PORT)
       })
       .catch(err => {
         console.error('Database connection error')
         console.error(err)
       })
  }
}
module.exports = new Database()
