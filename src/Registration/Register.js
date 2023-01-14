import React from "react";
import { useState } from "react";
import "/home/oem/Desktop/projects in React/task-1/employee-details/src/Registration/registraion.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const navto = useNavigate();

  const [visible, setvisibility] = useState(false);

  function newUser(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("working");
    console.log(name, email, password);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    if(name!==""&&email!==""&&password!==""){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Success',
        showConfirmButton: false,
        timer: 1500
      })
      navto("login");
    }
   
  }
  return (
    <div>
      <div className="body">
        <form className="loginContainer">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control name"
              id="name"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control name"
              id="email"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="passwordfield">
              <div>
                <input
                  type={visible ? "text" : "password"}
                  className="form-control password"
                  id="password"
                  required
                />
              </div>
              <div className="visibleicon">
                {visible ? (
                  <VisibilityOffIcon
                    onClick={() =>
                      setvisibility((prevalue) => {
                        return !prevalue;
                      })
                    }
                  />
                ) : (
                  <VisibilityIcon
                    onClick={() =>
                      setvisibility((prevalue) => {
                        return !prevalue;
                      })
                    }
                  />
                )}
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" onClick={newUser}>
            Register
          </button>
          <p>
            Already Registered?{" "}
            <span
              style={{color: "blue",cursor:"pointer"}}
              onClick={() => navto("login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
