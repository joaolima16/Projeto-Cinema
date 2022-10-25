const express = require("express")
const TicketController = require("../controllers/TicketController/index")
const Controllers = require("../controllers/Controller")
const MovieController = require("../controllers/MovieController")
const route = express.Router();


route.get("/migration",Controllers.migrations)
route.get('/Movies', TicketController.GetMovies);
route.get("/movie/:id/:hour",MovieController.GetMovieRooms);
route.post("/insertTicket",TicketController.CreateTicket)
route.get("/tips",TicketController.TipsRooms);
module.exports = route;