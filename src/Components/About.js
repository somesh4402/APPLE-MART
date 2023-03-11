import React  from "react";
import { NavLink } from "react-router-dom";
// import { Button } from "@mui/material";

const About =()=>{


    return(

        <>
         <div className="about">
            <div className="container py-4 my-4">
                <div className="row">
                <div className="col-md-6 d-flex justfy-content-center ">
                        <img src="https://apple-mart.pk/wp-content/uploads/2021/04/image0.png" alt="about us" height="400px"  />
                    </div>
                    <div className="col-md-6">
                        <h1  className="text-secondary fw-bold mb-4">ABOUT US</h1>
                        <hr/>
                        <p >
                        The APPLE MART is a chain of retail stores owned and operated by APPLE MART. The stores sell various Apple products, including Mac personal computers, iPhone smartphones, iPad tablet computers, Apple Watch smartwatches, Apple TV digital media players, software, and both Apple-branded and selected third-party accessories.
                        
                        The APPLE MART is a chain of retail stores owned and operated by APPLE MART. The stores sell various Apple products, including Mac personal computers, iPhone smartphones, iPad tablet computers, Apple Watch smartwatches, Apple TV digital media players, software, and both Apple-branded and selected third-party accessories.
                        The APPLE MART is a chain of retail stores owned and operated by APPLE MART. The stores sell various Apple products, including Mac personal computers, iPhone smartphones, iPad tablet computers, Apple Watch smartwatches, Apple TV digital media players, software, and both Apple-branded and selected third-party accessories.
                        The APPLE MART is a chain of retail stores owned and operated by APPLE MART. The stores sell various Apple products, including Mac personal computers, iPhone smartphones, iPad tablet computers, Apple Watch smartwatches, Apple TV digital media players, software, and both Apple-branded and selected third-party accessories. 
                         
                        </p>
                         
                         <NavLink to='/Contact' className='btn btn-outline-secondary px-3 '>CONTACT US</NavLink>
                         {/* <NavLink  to='/Contact' type="submit" variant="secondary"  >send message</NavLink> */}

                    </div>
                   

                </div>

            </div>
         </div>
                                                                                                                                               
        </>
    )
}


export default About ;