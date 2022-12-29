import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import Note from '../components/Note'
import Nav from '../components/Nav'

const URL ='http://localhost:8000/api/note/0';
const URL1 = 'http://localhost:8000/api/category/';
const URL3 ='http://localhost:8000/api/note_category/';

const Home = () =>{

  const [tag , setTag] = useState("")



  const [category, setCategory] = useState([])
  useEffect (  () => {
  getCategory()
  },[])

  const[notes, setNotes] = useState([])
  useEffect (  () => {
  getNotes()
  },[])

const getCategory = async () =>{
  const ca = await axios.get(URL1,{
      headers: {
      'user-token': localStorage.getItem("apiData")
      }
    }
  )

  setCategory(ca.data);   
}


const getNotes = async () =>{
  const res = await axios.get(URL,{
      headers: {
      'user-token': localStorage.getItem("apiData")
      }
    }
  )
  setNotes(res.data);
}

const getCategories = async (idc) =>{
  const res = await axios.get(URL3+idc,{
          headers: {
          'user-token': localStorage.getItem("apiData")
              }
          }
      )

      return res.data[0]
  }



return (
<div>
  <Nav/>
  <select onChange={(e) => setTag(e.target.value)}>
  <option value="">--------</option>
  {category.map((mov,index) =>
   <option value={mov.title}>{mov.title}</option>
  )
  }
  </select>
  <div className="ListContainer">   
  {notes.map((mov,index) =>
    <Note tag= {tag} cat={getCategories(mov.id)} status = {mov.status} id={mov.id}  user={mov.id_user} description={mov.description} title={mov.title} updatedAt={mov.updatedAt} />
  )
  }
    </div>  
</div>
)

}
export default Home;