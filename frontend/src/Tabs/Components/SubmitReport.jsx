import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import axios from 'axios'

function SubmitReport() {
  const [newResponse, setResponse] = useState("")
  function handleSubmit(e){
    e.preventDefault()
    setResponse("")
    axios.post('http://localhost:3000/progresstracker/submitreport',newResponse)
    .then(result => console.log(result))

     
  }
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header className='header-footer'>
          <Modal.Title>What did you do today?</Modal.Title>
        </Modal.Header>

        <Modal.Body >
        <textarea className= "form-control textarea-modal-style" value={newResponse} placeholder="Please type your response here..." onChange={e => setResponse(e.target.value)} />
        </Modal.Body>

        <Modal.Footer className='header-footer'>
          <Button onClick= {handleSubmit} variant="primary">Submit</Button>
          <Button variant="secondary">Cancel</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default SubmitReport;