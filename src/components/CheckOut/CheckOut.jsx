import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./Address";
import PaymentForm from "./Payment";
import Review from "./Review";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1 = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen(false);
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
      userId: localStorage.getItem("id"),
    },
  };
  const [activeStep, setActiveStep] = React.useState(0);

  const placeOrder = () => {
    axios
      .post(
        "http://localhost:8004/orders/checkout",
        {
          bill: localStorage.getItem("totalPayment"),
          items: localStorage.getItem("ItemArray"),
          userId: localStorage.getItem("id"),
        },
        config
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.status == "success") {
          deliver();
        }
      });
  };

  const deliver = () => {
    axios
      .post(
        "http://localhost:8003/delivery",
        {
          bill: localStorage.getItem("totalPayment"),
          items: localStorage.getItem("ItemArray"),
          userId: localStorage.getItem("id"),
        },
        config
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep == 2) {
      const paymentType = localStorage.getItem("paymentMethod");
      if (paymentType == "MobilePayment") {
        axios
          .post(
            "http://localhost:8006/mobile",
            {
              token: localStorage.getItem("token"),
              telephone: localStorage.getItem("mobile"),
              fourdigit: localStorage.getItem("fourdigit"),
              totalPayment: localStorage.getItem("totalPayment"),
            },
            config
          )
          .then((response) => {
            console.log(response.data.status);
            if (response.data.status == "success") {
              placeOrder();
            } else {
              alert("Order Fail");
            }
          });
      } else {
        axios
          .post(
            "http://localhost:8007/card",
            {
              token: localStorage.getItem("token"),
              cardName: localStorage.getItem("cardName"),
              cardNumber: localStorage.getItem("cardNumber"),
              cvv: localStorage.getItem("cvv"),
              exp: localStorage.getItem("exp"),
              totalPayment: localStorage.getItem("totalPayment"),
            },
            config
          )
          .then((response) => {
            console.log(response.data.status);
            if (response.data.status == "success") {
              // placeOrder();
              setOpen(true)
            } else {
              alert("Order Fail");
            }
          });
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        
      </AppBar> */}
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title"></DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Ok</Button>
                <Button onClick={handleClose} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog
              open={open1}
              onClose={handleClose1}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title"></DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Typography variant="h5" gutterBottom>
                    Your Order Not Successfully Places
                  </Typography>
                  <Typography variant="subtitle1">
                    Your Order has not been place successfully.Plese Try Again.
                  </Typography>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose1}>Disagree</Button>
                <Button onClick={handleClose1} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
