import React from 'react'
import { AppBar, Button, Toolbar,Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navuser = () => {
  return (
    <div>
      <AppBar>
                <Toolbar>
                    <Typography variant='h6' align="left" sx={{flexGrow:3}}></Typography>
                    <Link to='/Dashboard'>
                        <Button variant='contained'>Home</Button>
                    </Link>&nbsp;
                    <Link to='/Browse'>
                        <Button variant='contained'>Browse Jobs</Button>
                    </Link>&nbsp;
                    <Link to='/Applied'>
                        <Button variant='contained'>Applied Jobs</Button>
                    </Link>
                    <Link to='/Update'>
                        <Button variant='contained'>Profile Update</Button>
                    </Link>
                </Toolbar>
            </AppBar>
    </div>
  )
}

export default Navuser

