const Db = require("../config/Db");
const Sequelize = require("sequelize");

const RoomTable = Db.define('rooms',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nameMovie:{
        type:Sequelize.STRING,
        allowNull:false
    },
    nRoom:{
        type: Sequelize.INTEGER,
        allowNull:false,
       
    },
     RoomCapacity:{
        type: Sequelize.INTEGER,
        allowNull: false
     },
   

})
module.exports = RoomTable;

