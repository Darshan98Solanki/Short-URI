import { Row, Col, Card, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../App.css";
import { useRef } from "react";
import axios from "axios"

export default function CustomeCard() {

  const originalUrl = useRef()
  const shortUrl = useRef()

  function handleURL(){
    const url = originalUrl.current.value
    axios.post('http://localhost:3000/generateURL',{
      url
    }).then((response)=>{
      const data = response.data.shortenURL
      shortUrl.current.value = data
      toast.success("Short Url generated")
    }).catch((error)=>{
      toast.error(error.response.data.message)
    })
  }

  function copyUrl(){
    navigator.clipboard.writeText(shortUrl.current.value);
    toast.success("URL Copied!")
  }

  return (
    <>
      <Row className="mt-3">
        <Col className="d-flex justify-content-center align-items-center">
          <Card style={{ width: "50rem" }}>
            <Card.Body>
              <Card.Title className="text-center bold text-">
                Paste the URL to be shortened
              </Card.Title>
              <InputGroup className="my-4">
                <Form.Control placeholder="Enter the link here" ref={originalUrl} />
                <Button variant="primary" id="button-addon2" onClick={handleURL}>
                  Shorten URL
                </Button>
              </InputGroup>
              <Card.Text className="text-center">
              ShortURL is a free tool to shorten URLs and generate short links <br />
              URL shortener allows to create a shortened link making it easy to share
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-center align-items-center">
          <Card style={{ width: "50rem" }}>
            <Card.Body>
              <InputGroup className="my-4">
                <Form.Control ref={shortUrl}/>
                <Button variant="primary" id="button-addon2" onClick={copyUrl}> Copy URL </Button>
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastContainer/>
    </>
  );
}
