const { reset } = require("nodemon")
const MovieTable = require("../../models/MovieTable")
class Movies{
    static async GetMovieRooms(req,res){
        const {id,hour} = req.params
        console.log(req.params)
        const Data = await MovieTable.findAll({where:{
            roomId: req.params.id,
            Hour: req.params.hour
        }})
        console.log(Data)
        if(Data){
            return res.send(Data)
        }
        
    }
}
module.exports = Movies;