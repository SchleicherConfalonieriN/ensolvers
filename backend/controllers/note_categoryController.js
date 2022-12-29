import note_categoryModel from "../models/note_categoryModel.js"
import db from '../db/db.js'


//get all

export const getAll = async (req,res) =>{
    try{
        const note_category = await db.query(
        "SELECT nc.id_note ,c.id ,c.title FROM `categories` as c join note_categories as nc ON nc.id_category = c.id WHERE nc.id_note="+req.params.id); 
        res.json(note_category)
      } catch(error){
        res.json ({message :error.message})
    }
}



//register

export const create= async (req,res)=>{
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
            