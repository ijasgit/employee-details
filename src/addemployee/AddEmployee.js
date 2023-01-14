import React from 'react'
import { useNavigate } from 'react-router'

const AddEmployee = () => {
    const navto=useNavigate();

    function addData(){
        
    }
  return (
    <div> <div className="body">
    <form className="loginContainer">
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          className="form-control name"
          id="firstname"
        
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Second Name</label>
        <input
          type="text"
          className="form-control name"
          id="secondname"
      
          required
        />

      </div>
      <div className="mb-3">
        <label className="form-label">Email-id</label>
        <input
          type="email"
          className="form-control name"
          id="Email-id"
      
          required
        />

      </div>
      <div className="mb-3">
        <label className="form-label">Role</label>
        <input
          type="text"
          className="form-control name"
          id="Role"
      
          required
        />

      </div>
      <div className="mb-3">
        <label className="form-label">phone-no</label>
        <input
          type="text"
          className="form-control name"
          id="phone-no"
      
          required
        />

      </div>
      <div className="mb-3">
        <label className="form-label">Location</label>
        <input
          type="text"
          className="form-control name"
          id="Location"
      
          required
        />

      </div>
  

      <button type="submit" className="btn btn-primary" onClick={addData}>
        ADD
      </button>
      <button  className="btn btn-primary" onClick={()=>navto("/userdetails")}>
     Back
      </button>
 
    </form>
  </div></div>
  )
}

export default AddEmployee