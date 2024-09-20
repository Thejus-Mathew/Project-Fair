import React from 'react'
import Header from '../components/Header'
import Projectcard from '../components/Projectcard'
import { Col, Row } from 'react-bootstrap'

function Projects() {
  return (
    <>
      <Header/>
      <div className="projects">
        <h1 className='text-center fw-bolder mt-5'>All Projects</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex rounded w-50 border align-items-center mb-3 px-5 py-3 mt-3">
            <input className='form-control' type="text" placeholder='Search By Technologies' />
            <div className="btn ms-2"><i className="fa-solid fa-magnifying-glass"></i></div>
          </div>
        </div>

        <Row className='container'>
          <Col sm={12} md={4}>
            <Projectcard/>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Projects
