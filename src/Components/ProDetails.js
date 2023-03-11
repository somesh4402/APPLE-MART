import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import DATA from "./Data.js";
import Swal from 'sweetalert2';


const ProDetails = () => {

  const { addItem } = useCart()

  const { id } = useParams();

  
  const sweetalrt = ()=>(

    // for alert of add to cart button
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

      <div className='proDetails'>


        {

          DATA.map((Cval, index) => {

            if (Cval.id == id) {

              return (

                <>
                   {/* product details  */}
                  <div className='container my-5 py-5'>
                    <div className='row'>
                      <div className='col-md-6 d-flex justify-content-center mx-auto product proimg'>

                        <img src={Cval.img} alt='img' height='400px' />

                      </div>

                      <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h2 className=' '>{Cval.title}</h2>
                        <hr />

                      {/* reating stack  */}
                        <Stack spacing={1}>
                          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        </Stack>
                        

                        <h2 className='my-4'>₹{Cval.price.toLocaleString("EN-EN")} </h2>
                        <p>{Cval.desc}</p>

                        <button className="btn btn-outline-secondary" onClick={() =>  { sweetalrt();addItem(Cval)}}>Add to Cart</button>
                      </div>
                    </div>
                  </div>


                </>
              )

            }

          })

        }


      </div>


    </>


  )
}

export default ProDetails;
