import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import Note from '../components/Note'
import Nav from '../components/Nav.js'
const URL ='http://localhost:8000/api/note/archived';

const Archived = () =>{

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

return (
<div>
    <Nav/>
    <div className="ListContainer">   

        {notes.map((mov,index) =>
         <Note status = {mov.status} id={mov.id} title={mov.title} updatedAt={mov.updatedAt} />
                 )
        }
    </div> 

    </div> 
        )
}
export default Archived;