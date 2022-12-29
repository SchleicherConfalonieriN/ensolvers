import {useState} from 'react'
import axios from 'axios'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const URL ='http://localhost:8000/api/note/';
const URL1 ='http://localhost:8000/api/category/create';

const EditNote = (props) =>{
  const id = props.id

    const [title, setTitle] = useState(props.ti)
    const [description,setDescription] = useState(props.des)
    const [cat, setCat] =useState("")
    const [category,setCategory] = useState([])

  const user=props.id_user
  const st=props.st


    const edit = async (e) =>{
        e.preventDefault()
    
        await  axios.put(URL+id,{title:title,description:description,status:st,id_user:user},{
                headers: {
                   'user-token': localStorage.getItem("apiData")
                   }
                 }
               ).then((res) =>{console.log(res)})
                
                 console.log(category)

               
                axios.post(URL1,{category:category},{
                    headers: {
                       'user-token': localStorage.getItem("apiData")
                       }
                     }
                   )
  
                   const Location = window.location.pathname;
                   }
            

const addCategory = x =>{
    setCategory([...category,cat])
    setCat("")
    
 }
    return (
        <div id = "edit_note" className="centered">
           
            <form onSubmit={edit}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <br></br>  
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
                <th className='Content' key={index}>{mov}</th>
                <th className='Content' key={index}><AiFillDelete/></th>
                </tr>
            )
            }

            </div>
                <input type="text" value={cat} onChange={(e) => setCat(e.target.value)}></input>
                <button onClick={addCategory}>Add</button>
                <Link to={`/home/archived`}> <div>Cancel</div></Link>
                <button onClick={edit}>Save</button>
            </form>
        </div>
    )
}

export default EditNote