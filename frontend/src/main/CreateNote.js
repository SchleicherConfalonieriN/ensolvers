import {useState} from 'react'
import axios from 'axios'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
import Nav from '../components/Nav'
const URL ='http://localhost:8000/api/note/create';
const URL1 ='http://localhost:8000/api/category/create';

const CreateNote = () =>{
        const [title, setTitle] = useState("")
        const [description,setDescription] = useState("")
        const [cat, setCat] =useState("")
        const [category,setCategory] = useState([])

    

    const create = async (e) =>{
        e.preventDefault()
        axios.post(URL,{title:title,description:description},
            {
            headers: {
                'user-token': localStorage.getItem("apiData")
                }
            }
        ).then(res => {console.log(res)})


        axios.post(URL1,{category:category},
            {
            headers: {
                'user-token': localStorage.getItem("apiData")
                }
            }
        ).then(res => {console.log(res)})
       
    
    }


    
    const addCategory = x =>{
       setCategory([...category,cat])
       setCat("")
      
    }


    return (
        <div>
        <Nav/>
        <div id = "create_note">
           
            <form onSubmit={create}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <label>Description</label>
                <input type="text" valie={description}   onChange={(e) => setDescription(e.target.value)}></input>

                <div>
               {category.map((mov,index) =>

                        <tr>
                        <th className='Content' key={index}>{mov}</th>
                        <th className='Content' key={index}><AiFillDelete/></th>
                        </tr>
               )
               }
            </div>
                <input type="text" value={cat} onChange={(e) => setCat(e.target.value)}></input>
                <div onClick={addCategory}>AGREGAR</div>
              
                <button>Register</button>
                <button>Cancelar</button>
            </form>
        </div>

        </div>
    )
}

export default CreateNote