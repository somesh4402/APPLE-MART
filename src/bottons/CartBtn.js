
import React from "react";
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useCart } from "react-use-cart";
// import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";


const CartBtn = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const { items, isEmpty, totalItems, totalUniqueItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();

  console.log(items);





  return (

    <>



     {/* material ui badge for cart */}

      <Badge badgeContent={totalItems} className=" ms-4 me-5 my-2" color="secondary" ariant="standard" id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} >

        <i className="fa-solid fa-cart-shopping" style={{ fontSize: 25, cursor: "pointer" }} ></i>
      </Badge>

     {/* inside cart  */}

      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }} className="me-4"
      >

        {

        }

        <div className="container cart-menu">
          <div className="row">
            <div className="col-12 me-0">
              {

              }
              <h5>products:-{totalUniqueItems} items : ({totalItems})</h5>
              <i className="fas fa-close smallclose" onClick={handleClose}
                style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
              <table className='table table-light table-hover m-0'>
                <tbody>
                  {


                    items.map((item, id) => {



                      return (

                        <>





                          <tr>

                            <td>
                              <img src={item.img} alt="" style={{ height: '6rem' }} />
                            </td>
                            <td>{item.title}</td>
                            <td> ₹{item.price}</td>
                            <td>Quantity :{item.quantity}</td>

                            <td>
                              <Button className=' ms-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                <i class="fa-solid fa-minus" style={{ color: 'orange' }}></i></Button>
                              <Button className='  ms-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><i class="fa-solid fa-plus" style={{ color: 'green' }}></i></Button>
                              <Button className=' ms-2' onClick={() => removeItem(item.id)}><i class="fa-solid fa-trash "
                                style={{ color: 'red' }} ></i></Button>
                            </td>

                          </tr>
                        </>
                      )

                    })

                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <hr />
        <div className='col-auto ms-auto text-center'>
          <h2>Total Price : ₹{cartTotal.toLocaleString("EN-EN")}</h2>



        </div>

      

        {/* <div className="pro-Details d-flex justify-content-center align-items-center"
            style={{width:"24rem",padding:10,position:"relative"  }}>
            <i className="fas fa-close smallclose" onClick={handleClose} 
            style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer" }}></i>
                <img src="https://foodweb.in/assets/img/cart.gif" alt="img" height="90pxpx"/>
                <p>your cart is empty</p>
           </div>    */}




      </Menu>


    </>
  )
}


export default CartBtn;