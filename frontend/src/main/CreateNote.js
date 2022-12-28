import react from 'react'
import {useState} from 'react'
import axios from 'axios'



const CreateNote = () =>{
        const [title, setTitle] = useState("")
        const [description,setDescription] = useState("")
        const [category,setCategory] = useState([])
    

    const create = async (e) =>{
        e.preventDefault()
        axios.post(URL,{title:title,description:description,category:category},)
            /*{
            headers: {
                'user-token': localStorage.getItem("apiData")
                }
            }
        ).then(window.location.assign('http://localhost:3000/EspecialidadesLista'));
    */
    }

    return (
        <div>
            <form onSubmit={create}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <label>Description</label>
                <input type="text" valie={description}   onChange={(e) => setDescription(e.target.value)}></input>

                <div>
                    LISTA DE CATEGORIAS

                    <button>agregar Categoria</button>
                </div>

                <label>Category</label>
                <input type="text" value={category} onChange ={(e) => setCategory(e.target.value)}></input>

                <button>Register</button>
                <button>Cancelar</button>
            </form>
        </div>
    )
}

export default CreateNote