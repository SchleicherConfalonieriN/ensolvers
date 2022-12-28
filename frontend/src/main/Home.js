import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import Note from '../components/Note'

const URL ='http://localhost:8000/api/note/';

const Home = () =>{

    const[notes, setNotes] = useState([])
    useEffect (  () => {
    getNotes()
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
    
    <th>intento</th>
    </tr>

    {notes.map((mov,index) =>
    <tr>
    <th>
      <Note/>
      </th>
    </tr>
    )
    }
      </div>  
)

}
export default Home;