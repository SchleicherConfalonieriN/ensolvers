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
        )


        axios.post(URL1,{category:category},
            {
            headers: {
                'user-token': localStorage.getItem("apiData")
                }
            }
        )
       
        window.location.assign('http://localhost:3000/home');
    }

const deleteCategory = (x) =>{
    console.log(x)
   setCategory(category.filter((_, index) => index !== x))
}
    
    const addCategory = x =>{
       setCategory([...category,cat])
       setCat("")
    }

    const changeTitle = (e)  =>{
        setTitle(e)
    }
    const changeDescription = (e)  =>{
        setDescription(e)
    }

    const changeCat = (e) =>{
        setCat(e)
    }

    return (
        <div>
        <Nav/>
        <div id = "create_note" className="centered">
           
            <form onSubmit={create}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => changeTitle(e.target.value)}></input>

                <label>Description</label>
                <input type="text" valie={description}  onChange={(e) => changeDescription(e.target.value)}></input>

                <div id = "square">
               {category.map((mov,index) =>
                        <div >
                        <div className='Content' key={index}>{mov}</div>
                        <div className='Content'onClick={() => deleteCategory(index)} ><AiFillDelete ></AiFillDelete>   </div>
                  
                       </div>
               )
               }
                </div>
                <input type="text" value={cat} onChange={(e) => changeCat(e.target.value)}></input>
                <div onClick={addCategory}>add</div>
              
                <button>Register</button>
                <button>Cancelar</button>
            </form>
        </div>

        </div>
    )
}

export default CreateNote