import React, { useState } from 'react'
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { Link } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <br /><br /> <br />
      <form>
        <TextField type="text" label="Phone Number, Username, or Email" variant="filled" sx={{ width: "480px" }} /> <br /> <br />
        <TextField type="password" label="Password" variant='filled' sx={{ width: "480px" }} /> <br /><br />
        <FormControl sx={{ textAlign: "left" }}>
          <label htmlFor='role'>Role</label>
          <RadioGroup
            row
            aria-labelledby="radio-buttons-group-label"
            defaultValue="user"
            id="role"
            name="radio-buttons-group"
            value={role}
            onChange={handleChange}
          >
            <FormControlLabel value="user" control={<Radio checked={role === 'user'} />} label="User" />
            <FormControlLabel value="admin" control={<Radio checked={role === 'admin'} />} label="Admin" />
          </RadioGroup>
        </FormControl><br />
        {role == "user"?
         ( <Link to="/Dashboard">
            <Button variant='contained' type="submit" sx={{ width: "480px" }}>Log in</Button> </Link>): (
              <Link to="/Adminhome">
              <Button variant='contained' type="submit" sx={{ width: "480px" }}>Log in</Button> </Link>
            )
        }

      </form>
    </div>
  )
}
export default Login
