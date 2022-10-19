const MovieTable = require("../../models/MovieTable");
const RoomTable = require("../../models/RoomTable");
const Controller = require("../../controllers/Controller");
const TicketTable = require("../../models/TicketTable");
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
        const newValue = (await Tickets) - 1;

        await MovieTable.update(
          { Ticket: newValue },
          {
            where: {
              id: Movie.id,
              Hour: "18:00",
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
}
module.exports = TicketController;
