import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Projectcard from '../components/Projectcard'
import { Col, Row } from 'react-bootstrap'
import { getAllProjectApi } from '../services/allAPI'

function Projects() {
  const[projects,setprojects]=useState([])
  
  const getAllProjects = async()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "authorization":`Bearer ${token}`
      }
      const result = await getAllProjectApi(reqHeader)
      if (result.status == 200){
        setprojects(result.data)
      }else{
        console.log(result);
        setprojects([])
      }
    }
  }

  useEffect(()=>{
    getAllProjects()
  },[])


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
          {
            projects?.length>0?projects.map((item,index)=>(
              <Col key={index} sm={12} md={4}>
                <Projectcard project = {item}/>
              </Col>
            )):<></>
          }
        </Row>
      </div>
    </>
  )
}

export default Projects
