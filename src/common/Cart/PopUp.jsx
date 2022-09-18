import React from "react";
import Checkout from "../../components/CheckOut/CheckOut";
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
console.log("add Product")
  }
  return (
    <>
      <Button variant="primary" onClick={initModal}>
        Add Product
      </Button>
      <Modal show={isShow} className="popup-container">
      
        <Modal.Body>
          <>
           <Checkout />
          </>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="danger" onClick={closemodel}>
            Close
          </Button>
          <Button variant="dark" onClick={addProduct}>
          Add Product
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDialog;
