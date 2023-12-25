import ProgressTab from './Tabs/ProgressTab'
import NavigationBar from "./Tabs/Components/NavigationBar"
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'

function App() {
  

  return (
    <>
      <NavigationBar></NavigationBar>
      <Container fluid>
      <Row>
        <Col xs={12} md={7} className="left-side">
        <ProgressTab></ProgressTab>
        </Col>
        <Col xs={12} md={5} className="right-side">
          {/* Content for the graph */}
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
