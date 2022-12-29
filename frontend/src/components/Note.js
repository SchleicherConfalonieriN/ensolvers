import React, { useEffect }  from 'react';
import {useState} from 'react'
import {AiFillEdit,AiFillDelete,AiOutlineDropbox} from 'react-icons/ai';
import {BiBox} from 'react-icons/bi'
import {TfiNotepad} from 'react-icons/tfi'
import {Link} from 'react-router-dom'
import axios from 'axios'
import EditNote from '../main/EditNote';


const URL ='http://localhost:8000/api/note/';
const URL1 ='http://localhost:8000/api/note/archived/';
const URL2 ='http://localhost:8000/api/note/unarchived/';



const Note = (props) =>{
    let result = props.updatedAt.slice(0, 10);
    const id = props.id
    const user = props.user
    const status = props.status
    const [hidden, setHidden] = useState("hidden")
    const [hiddene, setHiddene] = useState("hidden")

   // const [hidenote, setHidenote] = useState("hidden")
    const [cat, setCat] = useState([])
    const tag = props.tag
    let hidenote = "visible";
    let categories
    
    /*
    const handlepr = async () =>{
        await props.cat.then((res) =>{console.log(res)})
    }

     handlepr();
*/
    


const count = 0;
console.log(categories)
/*
if(tag === "" ){hidenote = "visible"}
else{
    categories.forEach(element => {

        if(element === tag){
            count = +1
        }
    })

    if(count > 0){hidenote = "visible"}
}
*/

const deleteNote = async () => {
    console.log(id)
   
    await axios.delete(URL+id,{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    ).then(window.location.assign('http://localhost:3000/home'));
    show()
 }



const show = () => {
    if (hidden === "hidden"){
        setHidden("visible")
    }else{
        setHidden("hidden")
    }
}

const showEdit = () => {
    if (hiddene === "hidden"){
        setHiddene("visible")
    }else{
        setHiddene("hidden")
    }
}


if(tag!==""){
    cat.forEach((element) => {
        console.log(element)
    })
  }

const archived = async () =>{
 if(status===0)
    {
        await  axios.put(URL1+id,{status:1},{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
    }
    ).then(window.location.assign('http://localhost:3000/home')); 
    }
    else
    
    {
        await  axios.put(URL2+id,{status:1},{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
    }
    ).then(window.location.assign('http://localhost:3000/home/archived'));  
    }

}
    return(
        <div id = "Note" style={{visibility: hidenote}}>
            <div className='container'>
                <div className='ele1'><TfiNotepad size={40}/></div>
                <div className='ele2'>
                    <div className="title">
                    {props.title}
                    </div>
                    <div className="date">
                    {result}
                    </div>     
                </div>

                <div className='ele3'>
                    
                  {status === 1 &&(<div><AiOutlineDropbox className='imgO' onClick={archived}></AiOutlineDropbox></div>)} 
                  {status === 0 &&( <div><BiBox className='imgO' onClick={archived}></BiBox></div>)} 
                    <div><AiFillDelete className='imgO' onClick={show}  /></div>
                    <div><AiFillEdit className='imgO' onClick={showEdit}  /></div>
                </div>
         </div>
          
            <div style={{visibility: hiddene}} class="centered">
               <EditNote id = {id} id_user={user} st={status} cate={cat} ti = {props.title} des= {props.description}/>
            </div>



            <div  style={{visibility: hidden}} class="centered">
                <h4>Are you sure, you want to delete this note</h4>
                <div onClick={deleteNote}>Aceptar</div>
                <div onClick={show}>Cancelar</div>
            </div>
           
        </div>
    )
}

export default Note