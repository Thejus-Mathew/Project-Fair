import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand>
            <Link style={{textDecoration:"none",color:"white"}} to={'/'}><i className="fa-solid fa-list-check mx-3"></i>Project Fair</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
