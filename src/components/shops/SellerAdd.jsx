import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import axios from "axios";
import { useEffect } from "react";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ShopCart = ({ shopItems, addToCart }) => {
  const [productArray, setProductArray] = useState([]);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
      userId: localStorage.getItem("id"),
    },
  };
  useEffect(() => {
    axios
      .get(
        "http://localhost:8001/items",

        config
      )
      .then((response) => {
        console.log(response.data);
        setProductArray(response.data);
      });
  }, []);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [id, setId] = React.useState(0);
  const handleClickOpen = (event) => {
    const config1 = {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
        userId: localStorage.getItem("id"),
        id: event.target.valuue,
      },
    };
    // setOpen(true);
    // setId(e.target.value);
    console.log(event.target.value);
    axios
      .get(
        "http://localhost:8001/items/one",

        config1
      )
      .then((response) => {
        console.log(response.data);
      });
  };
  const handleClickOpen1 = (e) => {
    setId(e.target.value);

    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose = () => {
    setOpen(false);

    console.log(id);
  };
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const deleteProduct = () => {
    console.log("delete");
  };
  return (
    <>
      {productArray.map((shopItems, index) => {
        return (
          <div className="box">
            <div className="product mtop">
              <div className="img">
                <span className="discount">{10}% Off</span>
                <img src={`./images/flash/` + shopItems.image} alt="" />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{shopItems.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>${shopItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={handleClickOpen} value={shopItems._id}>
                    <i className="fa fa-pen" value={shopItems._id}></i>
                  </button>
                  <button onClick={handleClickOpen1} value={shopItems._id}>
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>

            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogContent>
                <div class="container">
                  <section class="panel panel-default">
                    <div class="panel-heading">
                      {/* <h3 class="panel-title">Panel heading</h3> */}
                    </div>
                    <div class="panel-body">
                      <form
                        action="designer-finish.html"
                        class="form-horizontal"
                        role="form"
                      >
                        <div class="form-group">
                          <label for="qty" className="forms">
                            Product Title
                          </label>
                          <div className="forms">
                            <input
                              type="text"
                              class="form-control"
                              name="qty"
                              id="title"
                              placeholder="Product Title"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="forms">
                            <label class="control-label small" for="date_start">
                              Description
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="date_start"
                              id="des"
                              placeholder="Description"
                            />
                          </div>
                          <div className="forms">
                            <label
                              class="control-label small"
                              for="date_finish"
                            >
                              Price
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="date_finish"
                              id="price"
                              placeholder="$"
                            />
                          </div>
                          <div className="forms">
                            <label
                              class="control-label small"
                              for="date_finish"
                            >
                              Discount
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="date_finish"
                              id="dis"
                              placeholder="Discount"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="name" class="col-sm-3 control-label">
                            Product Image
                          </label>
                          <div class="col-sm-3">
                            {/* <label class="control-label small" for="file_img">Product Image (jpg/png):</label> */}
                            <input type="file" name="file_img" id="img" />
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="col-sm-offset-3 col-sm-9">
                            {/* <button type="submit" class="btn btn-primary">Отправить</button> */}
                          </div>
                        </div>
                      </form>
                    </div>
                  </section>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Edit</Button>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog>

            {/* <Dialog
              open={open1}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
            
              <DialogContent>
                <div class="container">
                  <h3>Do you want to delete this {id} product?</h3>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose1}>Disagree</Button>
                <Button onClick={deleteProduct}>Agree</Button>
              </DialogActions>
            </Dialog> */}

            <Dialog
              open={open1}
              onClose={handleClose1}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose1}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
