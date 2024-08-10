import {Row , Col} from 'react-bootstrap'
import '../App.css'

export default function Header() {
  return <>
    <Row className="mt-5">
      <Col className="d-flex justify-content-center align-items-center">
        <strong className="short-url text-primary">Short URL</strong>
      </Col>
    </Row>
  </>;
}
