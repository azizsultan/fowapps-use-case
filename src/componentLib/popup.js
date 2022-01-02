import {Modal} from 'react-bootstrap';
import {DeleteButton} from './button';

export const PopUp = ({
  showPopup,
  onClose,
  OnOk,
  Heading = 'Confirmation',
  okText = 'Ok',
  closeText = 'Close',
  message = 'Are you sure?',
}) => {
  return (
    <>
      <Modal show={showPopup} onHide={onClose}>
        <Modal.Header>
          <Modal.Title>{Heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <DeleteButton onClick={onClose}>{closeText}</DeleteButton>
          <DeleteButton onClick={OnOk} primary>
            {okText}
          </DeleteButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};
