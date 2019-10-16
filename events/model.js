const Sequelize = require('sequelize')
const db = require('../db')

const Events = db.define(
  'events',
  { 
    eventName: Sequelize.STRING,
    url: Sequelize.STRING,
    price: Sequelize.INTEGER,
    description: Sequelize.TEXT,
    userId: Sequelize.INTEGER
  },
  {
    tableName: 'events'
  }
)

module.exports = Events
