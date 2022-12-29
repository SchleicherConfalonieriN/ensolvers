import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () =>{

    const Location = window.location.pathname;

const close = () => {
    localStorage.clear();
    window.location.assign('http://localhost:3000/');
}


    return(
        <nav>
            <Link to={"/home"}><div className='navO'>Home</div></Link>
            <Link to={"/create"}><div className='navO'>Create Note</div></Link>
            {Location === "/home" &&(  <Link to={`/home/archived`}><div className='navO'>Archived</div></Link>)}
            {Location === "/home/archived"&&(  <Link to={"/home"}><div className='navO'>Unarchived</div></Link>)}
            <div onClick={close} className='navO'>Close Session</div>
        </nav>
    )
}

export default Nav