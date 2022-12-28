import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom';



const URL ='http://localhost:8000/api/note_category/';


const CategoryList =() =>{
    const[category, setCategory] = useState([])
    useEffect (  () => {
        getCategory()

    },[])

const getCategory = async () =>{

    const res = await axios.get(URL, {
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    )
    console.log(localStorage.getItem("apiData"));
    console.log(res.data);
    setCategory(res.data);
}


const deleteCategory = async (id) => {
    await axios.delete(URL+id,{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    )
    getCategory()
 }


return (

    <div className="ListContainer">
    <h4>Categories</h4>
    <tr className='ListTitle'>
    <th></th>
    <th></th>
    </tr>

    {category.map((mov,index) =>
    <tr>
    <th className='Content' key={index}>{mov.name}</th>
    <th className='Content'><button onClick={()=>deleteCategory(mov.id)}>X</button></th>
    </tr>
    )
    }




      </div>  
)

}
export default CategoryList;