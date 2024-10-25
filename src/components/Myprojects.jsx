import React, { useContext, useEffect, useState } from 'react'
import Addproject from './Addproject'
import { getUserProjectApi } from '../services/allAPI'
import { addProjectContextResponse } from '../ContextApi/ContextShare'
import Editproject from './Editproject'

function Myprojects() {
  const{addProjectResponse,setAddProjectResponse}=useContext(addProjectContextResponse)

  const[projects,setprojects]=useState([])
  
  const getUserProjects = async()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "authorization":`Bearer ${token}`
      }
      const result = await getUserProjectApi(reqHeader)
      if (result.status == 200){
        setprojects(result.data)
      }else{
        console.log(result);
        setprojects([])
      }
    }
  }
  
  useEffect(()=>{
    getUserProjects()
  },[addProjectResponse])
  return (
    <>
      <div className="card shadow p-3 mt-5 w-100 m-0 border">
        <div className="d-flex">
          <h2>My Projects</h2>
        </div>
        <div className="ms-auto">
          <Addproject/>
        </div>
        <div className="mt-4">
          {
            projects?.length>0?projects.map((item,index)=>(
              <div key={index} className="border d-flex align-items-center rounded p-3 mb-2">
                <h3>{item?.title}</h3>
                <div className="d-flex ms-auto">
                  <Editproject project={item}/>
                  <a href={item?.github} target='_blank' className='me-3 btn text-dark'><i className="fa-brands fa-github"></i></a>
                  <button className='btn text-dark'><i className="fa-solid fa-trash"></i></button>
                </div>
              </div>
            )):<p className='text-danger'>No Projects Added Yet!!!</p> 
          }
        </div>
      </div>
    </>
  )
}

export default Myprojects
