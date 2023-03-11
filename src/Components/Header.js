import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "../bottons/CartBtn";
import LoginBtn1 from "../bottons/LoginBtn1";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {


  return (

    <>


<Navbar className="navbar navbar-expand-lg navbar-light fixed-top bg-light" bg="light" expand="lg">
      <Container className="container-fluid py-3" >
        <Navbar.Brand className="navbar-brand mx-auto fw-bold  me-5 ms-5  " to="/" > APPLE   <i class="fa-brands fa-apple"></i>   MART</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <ul className="navbar-nav ms-5 me-auto  mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink className="nav-link  ms-5  " aria-current="page" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link ms-5  " aria-current="page" to='/products'>Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link ms-5   " aria-current="page" to='/About'>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link ms-5 " aria-current="page" to='/Contact'>Contact</NavLink>
              </li>


            </ul>
                   

           
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* login and cart button direct components  */}
          <LoginBtn1/>
          <CartBtn/>
          
    </Navbar>
    </>

  )
}


export default Header;