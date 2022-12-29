import {useState} from 'react'
import axios from 'axios'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
import {useParams, Link} from 'react-router-dom';
import Nav from '../components/Nav'
const URL ='http://localhost:8000/api/note/';
const URL1 ='http://localhost:8000/api/category/create';

const EditNote = (props) =>{
    let {id} = useParams();
    console.log(props.des)
    const [title, setTitle] = useState(props.ti)
    const [description,setDescription] = useState(props.des)
    const [cat, setCat] =useState("")
    const [category,setCategory] = useState([])

  

    const edit = async () =>{

}

  
const addCategory = x =>{
    setCategory([...category,cat])
    setCat("")
    
 }
    return (
        <div id = "edit_note">
           
            <form onSubmit={edit}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <label>Description</label>
                <input type="text" value={description}   onChange={(e) => setDescription(e.target.value)}></input>

                <div>
               {props.cate.map((mov,index) =>

                        <tr>
                        <th className='Content' key={index}>{mov.title}</th>
                        <th className='Content' key={index}><AiFillDelete/></th>
                        </tr>

            
               )
               }
             {category.map((mov,index) =>
                <tr>
                <th className='Content' key={index}>{mov.title}</th>
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
    )
}

export default EditNote