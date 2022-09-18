import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ShopCart = ({ shopItems, addToCart }) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [id,setId]=React.useState(0);
  const handleClickOpen = (e) => {
// if(id=="null"){
  setOpen(true);
 setId(e.target.value)
console.log(id)
// }
// else{
//   setId("null");
//   setId(e.target.value)
//   console.log(e.target.value)
// }
  //  console.log(e.target.value)
  };
  const handleClickOpen1 = (e) => {
    setId(e.target.value)
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose = () => {
  
    setOpen(false);

    console.log(id)
  };
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const deleteProduct=()=>{
    console.log("delete")
  }
  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className="box">
            <div className="product mtop">
              <div className="img">
                <span className="discount">{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt="" />
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
                  <button onClick={handleClickOpen} value={shopItems.id}>
                    <i className="fa fa-pen" value={shopItems.id}></i>
                  </button>
                  <button onClick={handleClickOpen1} value={shopItems.id}>
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
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
              </DialogActions>
            </Dialog>
            <Dialog
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
            </Dialog>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
