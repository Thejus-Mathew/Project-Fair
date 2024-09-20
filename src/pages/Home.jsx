import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import titleImage from '../assets/images/image1.gif'
import Projectcard from '../components/Projectcard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div style={{width:"100%",height:"85vh"}} className="container-fluid rounded bg-info">
        <Row className='align-items-center p-5'>
            <Col  sm={12} md={6}>
                <h1 style={{fontSize:"80px"}} className='fw-border text-light'><i className="fa-solid fa-list-check me-2"></i>Project-Fair</h1>
                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure, mollitia natus tempora enim modi voluptas consequuntur, assumenda accusantium ratione sapiente esse quia similique ad tenetur vero deserunt. Delectus, error!</p>
                <Button className='btn btn-warning'>Start to Explore</Button>
            </Col>
            <Col sm={12} md={6} >
                <img src={titleImage} className='my-5' width={"60%"} alt="titleImage" />
            </Col>
        </Row>
      </div>


      {/* Projects */}

      <div className="all-projects mt-5">
        <h1 className='text-center text-primary'>Explore your projects</h1>
        <marquee scrollamount={25}>
            <Row>
                <Col sm={12} md={4} ld={4}>
                    <Projectcard/>
                </Col>
                <Col sm={12} md={4} ld={4}>
                    <Projectcard/>
                </Col>
                <Col sm={12} md={4} ld={4}>
                    <Projectcard/>
                </Col>
            </Row>
        </marquee>
        <div className="text-center mt-5">
            <Link style={{textDecoration:"none", color:"blue"}} to={'/projects'}>View more projects</Link>
        </div>
      </div>
    </>
  )
}

export default Home
