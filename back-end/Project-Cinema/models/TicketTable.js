const DB = require('../config/Db')
const Sequelize = require("sequelize")
const TicketTable = DB.define('ticket',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    Ticket:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})
module.exports = TicketTable;