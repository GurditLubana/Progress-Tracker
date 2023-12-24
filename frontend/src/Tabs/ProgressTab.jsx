// import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SubmitReport from "./Components/SubmitReport"

const ProgressTab = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={7} className="left-side">
          <SubmitReport></SubmitReport>
        </Col>
        <Col xs={12} md={5} className="right-side">
          {/* Content for the graph */}
        </Col>
      </Row>
    </Container>
  )
}

export default ProgressTab
