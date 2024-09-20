import React from 'react'
import { Form, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({register}) {


    const isRegisterForm = register?true:false


  return (
    <>
      <div className="d-flex justify-content-center align-items-center pt-5">
        <div className="container w-75">
            <Link to='/' style={{textDecoration:"none"}} className='my-5 fs-3'>
                <i className="fa-solid fa-arrow-left"></i>
                Back to Home
            </Link>
            <div className="card shadow p-5 mt-3" style={{backgroundColor:"rgb(100,150,200)"}}>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src="https://cetoex.com/static/media/login.93da60030457964850bd.png" width={"100%"} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <Navbar.Brand className=''>
                            <Link style={{textDecoration:"none",color:"white"}} to={'/'}> <h1><i className="fa-solid fa-list-check me-3"></i>Project Fair</h1> </Link>
                        </Navbar.Brand>
                        <h5 className='text-light text-center mt-4'>
                            {
                                isRegisterForm?"Sign Up to your Account":"Sign In to your Account"
                            }
                        </h5>
                        <Form className='mt-3 w-100'>
                            {
                                isRegisterForm&&
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInputName">
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </Form.Group>
                            }
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
                                <Form.Control type="email" placeholder="Enter Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInputPassword">
                                <Form.Control type="password" placeholder="Enter Your Password" />
                            </Form.Group>
                            {
                                isRegisterForm?
                                <>
                                    <button className='btn btn-dark d-grid'>Register</button>
                                    <p className='text-light text-end mt-2'>Already have an Account? <Link to={'/login'} style={{textDecoration:"none",fontWeight:"bold",color:"blue",textShadow:"0px 0px 4px rgb(250,250,0)"}}>Login Now</Link></p>
                                </>:
                                <>
                                    <button className='btn btn-dark'>Login</button>
                                    <p className='text-light text-end mt-2'>New User? <Link to={'/register'} style={{textDecoration:"none",color:"red",fontWeight:"bold",textShadow:"0px 0px 4px rgb(0,250,250)"}}>Register Now</Link></p>
                                </>
                            }
                        </Form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Auth
