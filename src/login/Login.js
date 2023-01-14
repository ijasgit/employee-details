import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "/home/oem/Desktop/projects in React/task-1/employee-details/src/Registration/registraion.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const navto=useNavigate()
  const [visible, setvisibility] = useState(false);

  function newUser(e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("working login");
    console.log(email, password);
   var checkMail= localStorage.getItem("email");
   var checkPassword= localStorage.getItem("password");
   console.log(checkMail,checkPassword);

   if(email===checkMail&&password===checkPassword){
    navto("/userdetails")
   }
   else{
    alert("invalid mailid or password ")
   }
  }
  return (
    <div>
      <div className="body">
        <form className="loginContainer">
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
         Login
          </button>
        
        </form>
      
      </div>
    </div>
  );
};

export default Login;
