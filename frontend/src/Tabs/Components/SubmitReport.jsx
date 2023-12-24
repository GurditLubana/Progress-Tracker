import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SubmitReport() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header className='header-footer'>
          <Modal.Title>What did you do today?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Please type your response here ...</p>
        </Modal.Body>

        <Modal.Footer className='header-footer'>
          <Button variant="primary">Submit</Button>
          <Button variant="secondary">Cancel</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default SubmitReport;