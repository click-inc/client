import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export default function PaymentForm() {
  const [value, setValue] = React.useState('MobilePayment');
  const [card,setCard]=useState(false)
  const handleChange = (event) => {
    localStorage.setItem('paymentMethod',event.target.value)
    setValue(event.target.value);
    if(event.target.value!='MobilePayment'){
      setCard(true)
    }
    else{
      setCard(false)
    }
  };
  const cardName=(e)=>{
localStorage.setItem('cardNumber',e.target.value)

  }
  const cardNumber=(e)=>{
localStorage.setItem('cardNumber',e.target.value)
  }

  const expiryDate=(e)=>{
localStorage.setItem('exp',e.target.value)

  }
  const cvv=(e)=>{
localStorage.setItem('cvv',e.target.value)
  }
  const telephone=(e)=>{
    localStorage.setItem('mobile',e.target.value)
  }
  const fourdigit=(e)=>{
    localStorage.setItem('fourdigit',e.target.value)
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <FormControl>
      {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="MobilePayment" control={<Radio />} label="Mobile Payment" />
        <FormControlLabel value="CardPayments" control={<Radio />} label="Card Payments" />
      </RadioGroup>
    </FormControl>
    {!card && 
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="telephone"
          label=" Mobile Phone number"
          fullWidth
          autoComplete="cc-name"
          variant="standard"
          onChange={telephone}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="digit4"
          label="Four Digit Number"
          fullWidth
          autoComplete="cc-number"
          variant="standard"
          onChange={fourdigit}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="expDate"
       
          fullWidth
          autoComplete="cc-exp"
          variant="standard"
         value={localStorage.getItem('totalPayment')}
         disabled
        />
      </Grid>
     
     
    </Grid>

     }
     {card && 
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cardName"
          label="Name on card"
          fullWidth
          autoComplete="cc-name"
          variant="standard"
          onChange={cardName}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cardNumber"
          label="Card number"
          fullWidth
          autoComplete="cc-number"
          variant="standard"
          onChange={cardNumber}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="expDate"
          label="Expiry date"
          fullWidth
          autoComplete="cc-exp"
          variant="standard"
          onChange={expiryDate}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cvv"
          label="CVV"
          helperText="Last three digits on signature strip"
          fullWidth
          autoComplete="cc-csc"
          variant="standard"
          onChange={cvv}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveCard" value="yes" />}
          label="Remember credit card details for next time"
        />
      </Grid>
    </Grid>

     }
    </React.Fragment>
  );
}