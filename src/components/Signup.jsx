import React from 'react'
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <br /> <br /> <br />
      <form>  
      <TextField type="text" label="Mobile Number or Email" variant="filled" sx={{width:"480px"}} /> <br /> <br />
      <TextField type="text" label="Firstname" variant="filled" sx={{width:"480px"}} /> <br /> <br />
      <TextField type="text" label="Lastname" variant="filled" sx={{width:"480px"}} /> <br /> <br />
      <TextField type="password" label="Password" variant="filled" sx={{width:"480px"}}/> <br /><br />
      <Link to='/Login'>
      <Button variant='contained' type="submit" sx={{width:"480px"}}>Sign Up</Button>
      </Link>
      </form>
    </div>
  )
}
export default Signup
