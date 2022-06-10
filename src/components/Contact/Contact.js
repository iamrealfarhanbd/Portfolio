import React, { useRef } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
  const form = useRef();

  const { register, handleSubmit ,reset} = useForm();

  const sendEmail = (data) => {
    emailjs
      .sendForm(
        "service_w422wzm",
        "template_3d288tb",
        form.current,
        "WUbPcNX44GE7fiWEZ"
      )
      .then(
        (data) => {
          console.log(data.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      toast("Your message Sent!",{icon: "🚀"});
      reset()
  };

  return (
    <Container fluid className="about-section">
        <ToastContainer />
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Form ref={form} onSubmit={handleSubmit(sendEmail)} className="text-start">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  {...register("from_name", { required: true, maxLength: 80 })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  {...register("reply_to", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Your Message</Form.Label>

                <Form.Control as="textarea" {...register("message", {})} />
              </Form.Group>
              <Form.Control className="my-3" type="submit" />
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
