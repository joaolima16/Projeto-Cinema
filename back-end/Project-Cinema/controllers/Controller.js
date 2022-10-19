const RoomTable = require("../models/RoomTable")
const MovieTable = require("../models/MovieTable")
const TipsTable = require("../models/TipsTable")
const TicketTable=  require("../models/TicketTable")
 class Controller{
    static async migrations(){
        await RoomTable.sync({ force: true });                          
;       Controller.RelationshipMovieRoomTables();
        Controller.RelationshipRoomMovieTables();
        Controller.RelationshipMovieTickets();
        MovieTable.sync({ force: true });   
        TicketTable.sync({force:true})
         Controller.RelationshipTipsMoviesTables();
         Controller.RelationshipRoomsTipsTables();     
        TipsTable.sync({ force: true });
       

     
    }
    static async RelationshipRoomMovieTables(){
        MovieTable.belongsTo(RoomTable,{
            constraint:true,
            allowNull:false
        })
    }
    static async RelationshipRoomsTipsTables(){
        TipsTable.belongsTo(RoomTable,{
            constraint:true,
            allowNull:false
        })
        RoomTable.belongsTo(TipsTable,{
            constraint:true,
            allowNull:false
        })
    }
    static async RelationshipTipsMoviesTables(){
        MovieTable.belongsTo(TipsTable,{
            constraint:true,
            allowNull:false
        })
        TipsTable.belongsTo(MovieTable,{
            constraint:true,
            allowNull: false
        })
    }
    static async RelationshipMovieRoomTables(){
        RoomTable.belongsTo(MovieTable,{
            constraint:true,
            allowNull:false
        })
    }
    static async RelationshipMovieTickets(){
        MovieTable.hasMany(TicketTable,{
            constraint:true,
            allowNull:false
        })
        TicketTable.belongsTo(MovieTable,{
            allowNull:false
    })
}
}
module.exports = Controller
