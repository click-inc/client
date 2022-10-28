import React from "react";

import "../components/shops/style.css";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
function ModalDialog() {
  const [isShow, invokeModal] = React.useState(false);
  const [isShow1, invokeModal2] = React.useState(false);
  const [title1, setTitle1] = useState("");
  const [cat, setCat1] = useState("");
  const [desc, setDesc1] = useState("");
  const [disc, setDisc1] = useState("");
  const [pri, setPri1] = useState("");
  const [im, setIm1] = useState("");
  // const [pri,setPri]=useState('')
  const addTitle = (e) => {
    setTitle1(e.target.value);
    console.log(e.target.value);
  };

  const setCat = (e) => {
    setCat1(e.target.value);
    console.log(e.target.value);
  };
  const setDesc = (e) => {
    setDesc1(e.target.value);
    console.log(e.target.value);
  };
  const setDisc = (e) => {
    setDisc1(e.target.value);
    console.log(e.target.value);
  };
  const setPri = (e) => {
    setPri1(e.target.value);
    console.log(e.target.value);
  };
  const setIm = (e) => {
    setIm1(e.target.value);
    console.log(e.target.value);
  };

  const initModal = () => {
    return invokeModal(!false);
  };
  const closemodel = () => {
    return invokeModal(false);
  };
  const successfull=()=>{
    return invokeModal2(false)
  }
  const addProduct = () => {
    const title = title1;
    const owner = localStorage.getItem("id");
    const des = desc
    const dis = disc
    const img = im
    const price = pri
    const category =cat
    console.log(owner, des, img, category, dis, img, title);

      axios
      .post("http://localhost:8001/items", {
        owner:owner,
        name:title,
        description:des,
        category:category,
        price:price,
        image:'flash-1.png'

      })
      .then((response) => {
        console.log(response.data)
        if(response.data){

          console.log("Ppp")
          invokeModal2(true)
          invokeModal(false)
        }

    })
  };
  return (
    <>
      <Button variant="primary" onClick={initModal}>
        Add Product
      </Button>
      <Modal show={isShow} className="popup-container">
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Add a product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
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
                          value={title1}
                          onChange={addTitle}
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
                          value={desc}
                          onChange={setDesc}
                          placeholder="Description"
                        />
                      </div>
                      <div className="forms">
                        <label class="control-label small" for="date_finish">
                          Price
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="date_finish"
                          id="price"
                          placeholder="$"
                          value={pri}
                          onChange={setPri}
                        />
                      </div>
                      <div className="forms">
                        <label class="control-label small" for="date_finish">
                          Discount
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="date_finish"
                          id="dis"
                          placeholder="Discount"
                          value={disc}
                          onChange={setDisc}
                        />
                      </div>
                      <div className="forms">
                        <label class="control-label small" for="date_finish">
                          category
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="date_finish"
                          id="cat"
                          placeholder="Discount"
                          value={cat}
                          onChange={setCat}
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="name" class="col-sm-3 control-label">
                        Product Image
                      </label>
                      <div class="col-sm-3">
                        {/* <label class="control-label small" for="file_img">Product Image (jpg/png):</label> */}
                        <input
                          type="file"
                          name="file_img"
                          id="img"
                          value={im}
                          onChange={setIm}
                        />
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
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={closemodel}>
            Close
          </Button>
          <Button variant="dark" onClick={addProduct}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={isShow1} className="popup-container">
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Succuessfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <h3>Product addedd successfully</h3>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={successfull}>
           Ok
          </Button>
          {/* <Button variant="dark" onClick={addProduct}>
            Add Product
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDialog;
