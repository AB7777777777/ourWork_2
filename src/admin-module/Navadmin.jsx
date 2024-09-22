import React from 'react'
import { AppBar, Button, Toolbar,Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navadmin = () => {
  return (
    <div>
      <AppBar>
                <Toolbar>
                    <Typography variant='h6' align="left" sx={{flexGrow:3}}></Typography>
                    <Link to='/Adminnhome'>
                        <Button variant='contained'>Home</Button>
                    </Link>&nbsp;
                    <Link to='/Managejobs'>
                        <Button variant='contained'>Manage Jobs</Button>
                    </Link>&nbsp;
                </Toolbar>
            </AppBar>
    </div>
  )
}

export default Navadmin

