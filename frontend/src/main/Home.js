import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'


const Home = () =>{

    const[notes, setNotes] = useState([])
    useEffect (  () => {
    getnote()
    },[])

const getNotes = async () =>{
    const res = await axios.get(URL,{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    )
    console.log(localStorage.getItem("apiData"));
    console.log(res.data);
    setNotes(res.data);
}


const deleteNote = async (id) => {
    await axios.delete(URL+id,{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    
    )
    getNotes()
 }


return (

    <div className="ListContainer">
    <h4>Listado de notes</h4>
    <tr className='ListTitle'>
    <th>Nota</th>
    <th>nota</th>
    <th>nota</th>
    <th>nota</th>
    <th></th>
    </tr>

    {note.map((mov,index) =>
    <tr>
    <th className='Content' key={index}></th>
    <th className='Content' key={index}></th>
    <th className='Content' key={index}></th>
    <th className='Content' key={index}></th>
    <th><Link><h4>Edit</h4></Link></th>
    <th><button onClick={()=>deleteNote(mov.id)}>X</button></th>
    </tr>
    )
    }
      </div>  
)

}
export default Home;