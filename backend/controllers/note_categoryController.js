import note_categoryModel from "../models/note_categoryModel.js"



//get all

export const getAll = async (req,res) =>{
    try{
        const note_category = await note_categoryModel.indAll({
            where:{ 
                id_note: req.id_note}
        }); 
        res.json(note_category)
      } catch(error){
        res.json ({message :error.message})
    }
}



//register

export const creater= async (req,res)=>{
    try {
        await note_categoryModel.create(req.body)
        res.json({"message":"note_category registrada correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//borrar

export const deletenote_category = async (req, res) => {
    try {
        await note_categoryModel.destroy({ 
            where: {id:req.params.id}
        })
        res.json({
            "message":"Delete"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

    }

export const updatenote_category = async(req,res)=>{
        try{
            await note_categoryModel.update(req.body,{ 
                where:{ id: req.params.id}}
            )
            res.json("updated")
            } catch (error) {
            res.json( {message: error.message} )
            }
            }
            