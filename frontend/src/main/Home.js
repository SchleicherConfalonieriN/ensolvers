import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import Note from '../components/Note'
import Nav from '../components/Nav'
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




return (
  <div>
    <Nav/>
    <div className="ListContainer">   
    {notes.map((mov,index) =>
      <Note status = {mov.status} id={mov.id}  user={mov.id_user} description={mov.description} title={mov.title} updatedAt={mov.updatedAt} />
    )
    }
      </div>  
 </div>
)

}
export default Home;