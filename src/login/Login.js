import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "/home/oem/Desktop/projects in React/task-1/employee-details/src/Registration/registraion.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Swal from "sweetalert2";
import "../login/login.css";

const Login = () => {
  const navto = useNavigate();
  const [visible, setvisibility] = useState(false);

  function newUser(e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("working login");
    console.log(email, password);
    var checkMail = localStorage.getItem("email");
    var checkPassword = localStorage.getItem("password");
    console.log(checkMail, checkPassword);

    if (email === checkMail && password === checkPassword) {
      let timerInterval;
      Swal.fire({
        title: "Loading",
        html: "<b></b>",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 1000);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          navto("/userdetails");
        }
      });
    } else {
      let timerInterval;
      Swal.fire({
        title: "Loading",
        html: "<b></b>",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 1000);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Invaild E-mail or Password',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
     
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
          <p>
            New user?{" "}
            <span
              style={{ color: "blue", cursor: "pointer", hover: "underline" }}
              onClick={() => navto("/")}
            >
              Create Account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
