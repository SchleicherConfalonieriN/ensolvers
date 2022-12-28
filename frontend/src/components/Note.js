import React  from 'react';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
import {TfiNotepad} from 'react-icons/tfi'
const Note = (props) =>{

    return(
        <div id = "Note">
            <tr>
                <th><TfiNotepad/></th>
                <th>inforacion</th>
                <th><AiFillDelete/></th>
                <th><AiFillEdit/></th>
            </tr>
        </div>
    )
}

export default Note