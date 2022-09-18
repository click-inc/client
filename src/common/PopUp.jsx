import React from "react";
import "../components/shops/style.css";
import { Modal, Button } from "react-bootstrap";
function ModalDialog() {
  const [isShow, invokeModal] = React.useState(false);
  const initModal = () => {
    return invokeModal(!false);
  };
  const closemodel = () => {
    return invokeModal(false);
  };
  const addProduct=()=>{
    const title=document.getElementById('title').value
    const des=document.getElementById('des').value
    const dis=document.getElementById('dis').value
    const img=document.getElementById('img').value
    const price=document.getElementById('price').value
console.log(title,des,dis,img,price)
  }
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
                      <label for="qty"  className="forms">
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
                        <label class="control-label small" for="date_finish">
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
                        <label class="control-label small" for="date_finish">
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
                        <input type="file" name="file_img"  id="img"/>
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
    </>
  );
}
export default ModalDialog;
