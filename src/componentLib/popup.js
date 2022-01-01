import { Modal } from "react-bootstrap";
import { Button } from "./button";

export const PopUp = ({
  showPopup,
  onClose,
  OnOk,
  Heading = "Confirmation",
  okText = "Ok",
  closeText = "Close",
  message = "Are you sure?"
}) => {
  return (
    <>
      <Modal show={showPopup} onHide={onClose}>
        <Modal.Header>
          <Modal.Title>{Heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose}>{closeText}</Button>
          <Button onClick={OnOk} primary>
            {okText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
