import React from "react"
import * as emailjs from "emailjs-com"
import useInput from "../hooks/userInput"

import { Form, Row, Col, Button } from "react-bootstrap"

const Contactform = () => {
  const contactform = () => {
    const params = {
      email: inputs.email,
      name: inputs.name,
      message: inputs.message,
    }
    const service_id = "default_service"
    const template_id = "contactform"
    const user_id = "user_2aCUzqnCuE4sSeqWgys7M"

    const sendMessage = () => {
      emailjs.send(service_id, template_id, params, user_id).then(
        res => {
          console.log(`Success`, res.status, res.text)
        },
        err => {
          console.log(`Failed`, err)
        }
      )
    }
    sendMessage()

    // console.log(`checking for input` + inputs.name + `did they show?`)
    alert(
      `Thank you for your message ${inputs.name}! We'll get back to you soon!`
    )
  }
  const { inputs, handleInputChange, handleSubmit } = useInput(
    {
      name: "",
      email: "",
      message: "",
    },
    contactform
  )

  return (
    <Form id="contactPageForm" onSubmit={handleSubmit}>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Control
              required
              id="contactName"
              as="input"
              type="text"
              name="name"
              defaultValue={inputs.name}
              onChange={handleInputChange}
              placeholder="What is your name?"></Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Control
              required
              id="contactEmail"
              as="input"
              type="email"
              name="email"
              defaultValue={inputs.email}
              onChange={handleInputChange}
              placeholder="Your email?"></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group>
        <Form.Control
          required
          id="contactMessage"
          as="textarea"
          rows="3"
          name="message"
          defaultValue={inputs.message}
          onChange={handleInputChange}
          placeholder="How can we help you?"></Form.Control>
      </Form.Group>
      <Button variant="success" size="lg" type="submit">
        Send a message
      </Button>
    </Form>
  )
}

export default Contactform
