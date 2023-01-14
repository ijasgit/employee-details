import React, { useState } from "react";
import data from "../EmployeeData";
import { useNavigate } from "react-router";
import "/home/oem/Desktop/projects in React/task-1/employee-details/src/employee details/user.css"

const UserDetails = () => {
  const navto = useNavigate();
  const [employee, setemployee] = useState([data]);

  return (
    <div className="details">
      <h1 style={{textDecoration:"underline"}}>Employee Details</h1>
      <div className="tablecontainer">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">First Name</th>
            <th scope="col">Second Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Role</th>
            <th scope="col">PH-NO</th>
            <th scope="col">Location</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {employee[0].map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.fristname}</td>
                <td>{item.secondname}</td>
                <td>{item.emailid}</td>
                <td>{item.role}</td>
                <td>{item.phoneno}</td>
                <td>{item.location}</td>
                <td>
                  {/* <button>Edit</button> */}
                  {/* <button>Delete</button> */}
                  <button class="btn btn-secondary" onClick={()=>navto(`/view/${item.id}`,{state:{item}})}>More info</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UserDetails;
