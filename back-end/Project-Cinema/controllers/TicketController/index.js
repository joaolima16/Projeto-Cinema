const MovieTable = require("../../models/MovieTable");
const RoomTable = require("../../models/RoomTable");
const Controller = require("../../controllers/Controller");
const TicketTable = require("../../models/TicketTable");
const sequelize = require("sequelize");
class TicketController {
  static async GetMovies(req, res) {
    await Controller.RelationshipRoomMovieTables();
    const movies = await MovieTable.findAll({ include: RoomTable });
    res.json(movies);
  }

  static async CreateTicket(req, res) {
    var idMovie = "";
    const { Name, Ticket, Hour, id } = req.body[0];

    try {

      const Movies = await MovieTable.findOne({
        where: {
          id: id,
          Hour: Hour,
        },
      });

      if(Movies){
        const Capacity = Movies.Ticket
        if(Capacity <=0){ return res.send("Ingressos esgotados")}
      }

      Controller.RelationshipMovieTickets();
      const newTicket = await TicketTable.create({
        Name: Name,
        Ticket: 1,
        movieId: id,
      });
      const Movie = await MovieTable.findOne({
        where: {
          Name: Name,
          Hour: Hour,
        },
      });

      if (Movie) {
        const Tickets = await Movie.Ticket;
        const newValue = await Tickets - 1;
        await MovieTable.update(
          { Ticket: newValue },
          {
            where: {
              id:Movie.id,
              Hour: Hour,
            },
            limit: 1,
          }
        );
      }
      res.send("Ingresso Adquirido")
    } catch (ex) {
      console.log(ex.message);
    }
  }
  static async TipsRooms(req,res){
    const DataMovies = await MovieTable.findAll({
      attributes: [[sequelize.fn('count', sequelize.col('id')), 'values']],
      raw: true,
    });

    for(var i=1;i<=DataMovies[0].values;i++){
      
      const Tickets = await TicketTable.findAll({
          attributes: [[sequelize.fn('sum', sequelize.col('ticket')), 'Ingressos']],
          raw: true,
          where:{
              movieId:i
              }
      })
      console.log(Tickets)
    }
    
  }
}
module.exports = TicketController;
