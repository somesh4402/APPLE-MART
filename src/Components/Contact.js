import React from "react";

import { TextField } from "@mui/material";
import {Button} from "@mui/material";

const Contact = () => {


    return (


        <>
            <div className="contact">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 text-center py-3 my-3" >
                            <h1 className="text-secondary fw-bold mb-4" > have some questions?</h1>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-md-6">

                                <img src="https://t3.ftcdn.net/jpg/03/61/88/78/360_F_361887878_ArqB0f6xhcIzeQpqAKaDdUOOcK7cDmXD.jpg" height="300px" width="300px" alt="contact us" />

                            </div>
                            <div className="col-md-6">

                                <form>
                                     <div className="mb-3">
                                        {/* material ui textfilds for form  */}
          <TextField autoFocus margin="dense" id="name" label="Full Name" type="text" fullWidth variant="standard" />
                                        
                                    </div> 

                                    <div className="mb-3">
          <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
                                        
                                    </div>
                                    <div className="mb-3">
                                        {/* <label for="exampleFormControlTextarea1" className="form-label">message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea> */}
          <TextField autoFocus margin="dense" id="name" label="message" type="message" fullWidth variant="standard" />

                                    </div>
                                    <Button type="submit" variant="secondary"  >send message</Button>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Contact;