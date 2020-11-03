import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        //console.log("Hereeeeeeeeeeeee");
       window.addEventListener("scroll",()=>{
          if(window.scrollY > 150){
              handleShow(true);
          }else{
              handleShow(false);
          }
       });

       return ()=>{
           window.removeEventListener("scroll");
       }
    },[]);
    
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix Logo" className="nav_logo"/>
        </div>
    )
}

export default Nav;
