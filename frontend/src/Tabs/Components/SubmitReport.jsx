import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";

function SubmitReport() {
  const [newResponse, setResponse] = useState("");
  const handleSubmit = async () => {
    try {
      // Make a POST request to the server to create a new report
      await axios.post("http://localhost:8081/api/reports", {
        report: newResponse,
      });
      // Clear the input field
      setResponse("");
    } catch (error) {
      console.error("Error submitting report:", error.message);
    }
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header className="header-footer">
          <Modal.Title>What did you do today?</Modal.Title>
        </Modal.Header>
        <textarea
          className="form-control textarea-modal-style"
          value={newResponse}
          placeholder="Please type your response here..."
          onChange={(e) => setResponse(e.target.value)}
        />
        <Modal.Footer className="header-footer">
          <Button onClick={handleSubmit} variant="primary">
            Submit
          </Button>
          <Button variant="secondary">Cancel</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default SubmitReport;
