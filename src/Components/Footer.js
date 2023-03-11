import React from "react";

import { NavLink } from "react-router-dom";

const Footer = ()=>{


return(

    <>

<nav className="navbar navbar-expand-lg navbar-light  bg-light">
  <div className="container-fluid py-3">
  <NavLink className="navbar-brand  " to="#"> © 2023 APPLE  <i class="fa-brands fa-apple"></i> MART  </NavLink>
    
  <NavLink className="nav-link  ms-4   " aria-current="page" to='/Contact' > © All rights reserved.</NavLink>
    
      <ul className="navbar-nav ms-5 me-  mb-2 mb-lg-0">
        
          <NavLink className="nav-link  ms-4   " aria-current="page" to='/' ><i class="fa-brands fa-instagram"></i>instagram</NavLink>
       
        
          <NavLink className="nav-link ms-4 " aria-current="page" to='/Contact'><i class="fa-brands fa-facebook"></i>facebook</NavLink>
    
   
          <NavLink className="nav-link  ms-4  " aria-current="page" to='/Contact'><i class="fa-brands fa-twitter"></i>twitter</NavLink>
       
   
          <NavLink className="nav-link ms-4 me-5 " aria-current="page" to='/Contact'><i class="fa-solid fa-envelope"></i>email</NavLink>
       
        
        
      </ul>

 
   
    

  </div>
</nav>


    </>
)
}


export default Footer ; 