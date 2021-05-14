const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.join(__dirname, '../.env')
})

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_SECRET_REFRESH: process.env.JWT_SECRET_REFRESH,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  PORT: process.env.PORT
}
