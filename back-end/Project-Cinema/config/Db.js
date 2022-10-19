const Sequelize = require("sequelize")

 const Dbconn = new Sequelize("cinema","root","",{
    dialect: "mysql"
})
module.exports = Dbconn;