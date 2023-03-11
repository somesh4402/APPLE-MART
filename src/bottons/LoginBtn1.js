import React from 'react'
// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
// import { NavLink } from 'react-router-dom';

const LoginBtn1 = () => {


    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <>
    
    <div>
      <Button type="submit" variant="secondary"    onClick={handleClickOpen}>
      <i class="fa-solid fa-right-to-bracket me-2 "></i> Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
        <Button className=" mb-4 w-100" ><span> <i className="fa-brands fa-google"></i> </span> Sign in with Google </Button>
                            <Button className=" mb-4 w-100" > <span><i className="fa-brands fa-facebook"></i></span>  Sign in with facebook </Button>
          <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
          <TextField  autoFocus margin="dense"  id="name"  label="Password"  type="password"  fullWidth  variant="standard"/>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
    
    
    </>


  )
}

export default LoginBtn1
