import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import projectImage from '../assets/images/image2.webp'


function Projectcard() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <Card style={{ width: '18rem' }} className='mt-3'>
        <Card.Img variant="top" src={projectImage} onClick={handleShow} />
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
        </Card.Body>
      </Card>


      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img src={projectImage} width={"100%"} alt="" />
            </Col>
            <Col md={6}>
              <h2 className='text-success'>Prjoect Title</h2>
              <p><span><strong>Project Overview:</strong></span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis odit doloribus consequatur alias minus. Nihil laborum aspernatur dolorum laboriosam, maiores voluptatum veritatis rem ducimus ullam pariatur eum porro possimus quis?</p>
              <p className='text-warning'>Languages Used: HTML, CSS, JavaScript</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className="mt-2">
            <a href="" target='_blank' className='btn me-3'><i className="fa-brands fa-github fa-2xl"></i></a>
            <a href="" target='_blank' className='btn me-3'><i className="fa-solid fa-link fa-2xl"></i></a>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Projectcard
