const Sequelize  = require("sequelize")
const Db = require("../config/Db")

const MovieTable = Db.define("movies", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Duration: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Ticket: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Sinopse: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Hour: {
    type: Sequelize.ENUM(
      "15:00",
      "18:00",
      "17:00",
      "22:00",
      "16:00",
      "20:00",
      "21:00",
      "20:30"
    ),
  },
});
module.exports = MovieTable;
