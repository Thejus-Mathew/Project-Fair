import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card shadow p-5 mt-3 me-2">
        <div className="d-flex justify-content-between">
          <h1>Profile</h1>
          <button 
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open} className='btn border border-info border-2'>
            {
              open?
              <i className="fa-solid fa-angle-up"></i>
              :<i className="fa-solid fa-angle-down"></i>
            }

          </button>
        </div>
        <Collapse in={open}>
          <div className="row justify-content-center mt-3">
            <label style={{width:"200px"}}>
              <input type="file" style={{display:"none"}} name="" id="" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" style={{borderRadius:"50%"}} width={"100%"} alt="profile" />
            </label>
            <div className="mt-5">
              <input type="link" placeholder='GitHub Link' className='form-control'/>
              <br />
              <input type="link" placeholder='LinkedIn Link' className='form-control'/>
            </div>
            <div className="d-grid mt-3">
              <button className='btn btn-success'>Update</button>
            </div>
          </div>
        </Collapse>
      </div> 
    </>
  )
}

export default Profile
