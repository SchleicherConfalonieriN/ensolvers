import categoryModel from "../models/categoryModel.js"



//get all   solo para prubas con post borrar al final

export const getAll = async (req,res) =>{
    try{
        const category = await categoryModel.findAll({}); 
        res.json(category)
    } catch(error){
        res.json ({message :error.message})
    }
}



//register

export const create = async (req,res)=>{
    try {
    const all = req.body.category
    all.forEach(c => 
        {
         categoryModel.findOrCreate({
                where:{title:c},c
            })
        });
    } catch (error) {
        res.json({message:error.message})
    }
}

//borrar

export const deletecategory = async (req, res) => {
    try {
        await categoryModel.destroy({ 
            where: {id:req.params.id}
        })
        res.json({
            "message":"Deleted"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

    }

export const updatecategory = async(req,res)=>{
        try{
            await categoryModel.update(req.body,{ 
                    where:{ id: req.params.id}}
            )
            res.json("updated")
            } catch (error) {
            res.json( {message: error.message} )
            }
            }