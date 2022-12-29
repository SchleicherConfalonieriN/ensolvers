import noteModel from "../models/noteModel.js"



//get all

export const getAll = async (req,res) =>{
    try{
        const note = await noteModel.findAll({
            where:
            { 
                id_user: req.userId,
                status:0
            }

        }); 
        res.json(note)
      } catch(error){
        res.json ({message :error.message})
    }
}

export const getArchived = async (req,res) =>{
    try{
        const note = await noteModel.findAll({
            where:
            { 
                id_user: req.userId,
                status:1
            }

        }); 
        res.json(note)
      } catch(error){
        res.json ({message :error.message})
    }
}




//register

export const create = async (req,res)=>{
    try {
        await noteModel.create({
           title : req.body.title,
           description: req.body.description,
           id_user: req.userId,
           status:0
        })
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


export const archived = async(req,res)=>{
    try{
        console.log(req.params.id)
        await noteModel.update({status:1},{ 
            where:{ id: req.params.id}}
        )
        res.json("updated")
        } catch (error) {
        res.json( {message: error.message} )
        }
}

export const unarchived = async(req,res)=>{
    try{
        console.log(req.params.id)
        await noteModel.update(
            {status:0},{ 
            where:{ id: req.params.id}}
        )
        res.json("updated")
        } catch (error) {
        res.json( {message: error.message} )
        }
}