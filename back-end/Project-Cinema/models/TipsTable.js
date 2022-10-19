const Sequelize = require("sequelize")
const Db = require("../config/Db")



const TipsTable = Db.define("Tips",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    }
})

module.exports = TipsTable;