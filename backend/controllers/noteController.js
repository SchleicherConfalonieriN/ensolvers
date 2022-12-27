import noteModel from "../models/noteModel.js"



//get all

export const getAll = async (req,res) =>{
    try{
        const note = await noteModel.indAll({
            where:{ 
                id_user: req.userId}
        }); 
        res.json(note)
      } catch(error){
        res.json ({message :error.message})
    }
}



//register

export const create = async (req,res)=>{
    try {
        await noteModel.create(req.body)
        res.json({"message":"note registrada correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//borrar

export const deletenote = async (req, res) => {
    try {
        await noteModel.destroy({ 
            where: {id:req.params.id}
        })
        res.json({
            "message":"Delete"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

    }

export const updatenote = async(req,res)=>{
        try{
            await noteModel.update(req.body,{ 
                where:{ id: req.params.id}}
            )
            res.json("updated")
            } catch (error) {
            res.json( {message: error.message} )
            }
            }
            