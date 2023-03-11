import React from "react";

import Swal from "sweetalert2";
import DATA from "./Data.js";
import { Button } from "@mui/material";

import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

const Products = () => {

    
  const {addItem}=useCart()

  
  const sweetalrt = ()=>(

    
    Swal.fire({
     
        icon: 'success',
        title: 'success',
        html:"product added successfully",
        showConfirmButton: false,
        timer: 1300
      })

  )

   

    return (

        <>
            <div className="products">
            


             {/* <div className="container py-5">
                    <div className="row">
                      <div className="col-12 text-center" >
                          <hr/>
                      </div>
                        

                    </div>
                </div>  */}

                <div className="container">
                    <div className="row justify-content-around">

                        {DATA.map((element,id)=>{

                            return(
                                
                                <div className="card my-4 py-4" key={element.title} style={{width: "18rem"}}>
                <img src={element.img} className="card-img-top" alt={element.title}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{element.title}</h5>
                      <p className="lead">₹{element.price.toLocaleString("EN-EN")}</p>
                      <NavLink to={`products/${element.id}`}> <button className="btn btn-outline" >Know More</button></NavLink>
                      

                    
                      <button  className="btn btn-outline-secondary" onClick={() => { sweetalrt();addItem(element)} }>Add to Cart</button>
                    </div>
                       

            </div>
                                
                            )
                        })}

                    </div>
                </div>

            </div>

            <div>
     
    
    </div>
        </>
    )
}


export default Products;