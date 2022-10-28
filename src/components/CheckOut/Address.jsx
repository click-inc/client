import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

export default function AddressForm() {
  const [fname,setFname]=React.useState()
  const [lname,setLname]=React.useState()
  const [add,setAdd]=useState()
  const [add1,setAdd1]=useState()
  const [city,setCity]=useState()
  const [province,setProvince]=useState()
  const [zip,setZip]=useState()
  const [country,setCountry]=useState()
  const [delivery,setDelivery]=useState([])



  const addFname=(e)=>{
    setFname(e.target.value)
    localStorage.setItem('fname',e.target.value)

  }

  const addLname=(e)=>{
setLname(e.target.value)
localStorage.setItem('lname',e.target.value)


  }
  const addAdd=(e)=>{
    localStorage.setItem('address',e.target.value)
  }
 
  const addCity=(e)=>{
    localStorage.setItem('city',e.target.value)
  }
  const addProvince=(e)=>{
    localStorage.setItem('province',e.target.value)
  }
  // const addCity=()=>{

  // }
  const addZip=(e)=>{
    localStorage.setItem('zip',e.target.value)
  }
  const addCountry=(e)=>{
    localStorage.setItem('country',e.target.value)
  }
  // const 
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={fname}
            onChange={addFname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={lname}
            onChange={addLname}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={add}
            onChange={addAdd}
          />
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={city}
            onChange={addCity}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={province}
            onChange={addProvince}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={zip}
            onChange={addZip}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={country}
            onChange={addCountry}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}