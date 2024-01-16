import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";
import axios from "axios";
import "../../App.css";

function SubmitReport() {
  const [newResponse, setResponse] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);

  const handleSubmit = async () => {
    try {
      // Make a POST request to the server to create a new report
      if (newResponse.trim() === "") {
        setEmptyInput(true);
      } else {
        await axios.post("http://localhost:8081/api/reports", {
          report: newResponse,
        });

        setResponse("");
      }
    } catch (error) {
      console.error("Error submitting report:", error.message);
    }
  };

  return (
    <div
      className="modal-box"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header className="headerFooter p-3 rounded">
          <Modal.Title>What did you do today?</Modal.Title>
        </Modal.Header>
        <textarea
          className="form-control textarea-modal-style"
          value={newResponse}
          placeholder="Please type your response here..."
          onChange={(e) => setResponse(e.target.value)}
        />
        <Modal.Footer className=" p-3 rounded">
          <Button className="pr-5" onClick={handleSubmit} disabled= {emptyInput} variant="primary">
            Submit
          </Button>
          
          <Button
            className="btn btn-primary pl-3"
            onClick={() => {
              setResponse("");
            }}
            variant="secondary"
          >
            Cancel
          </Button>
          <Toast  show={emptyInput} onClose={() => setEmptyInput(false)}>
            <Toast.Header className= "warningToast">
              <strong className="me-auto ">WARNING ... </strong>
              
            </Toast.Header>
            <Toast.Body>Please enter a non-empty response.</Toast.Body>
          </Toast>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default SubmitReport;
