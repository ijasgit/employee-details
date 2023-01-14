import React from "react";
import { useNavigate } from "react-router";
import data from "./EmployeeData";
import { useLocation } from "react-router";

const View = () => {
  const location = useLocation();
  const navto = useNavigate();
  console.log(location.state.item, "local");
  var selectedData = location.state.item;
  console.log(selectedData);

  var check = data.map((item, index) => item);
  console.log(check, "checked");
  return (
    <div>
      <div className="body">
        <form className="loginContainer">
        <h2 style={{marginBottom:"25px",textDecoration:"underline"}}>DETAILS</h2>
          <div className="mb-3" style={{display:"flex"}}>
            <div >
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control name"
                value={selectedData.fristname}
                readOnly
              />
            </div>
            <div>
              <label className="form-label">Second Name</label>
              <input
                type="text"
                className="form-control name"
                value={selectedData.secondname}
                readOnly
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email-id</label>
            <input
              type="text"
              className="form-control name"
              value={selectedData.emailid}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              type="text"
              className="form-control name"
              value={selectedData.role}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ph-no</label>
            <input
              type="text"
              className="form-control name"
              value={selectedData.phoneno}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control name"
              value={selectedData.location}
              readOnly
            />
          </div>

          <button
            class="btn btn-secondary"
            onClick={() => navto("/userdetails")}
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default View;
