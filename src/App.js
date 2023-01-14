import "./App.css";
import "./Registration/Register";
import Register from "./Registration/Register";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./login/Login";
import UserDetails from "./employee details/UserDetails";
import AddEmployee from "./addemployee/AddEmployee";
import View from "./View";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/userdetails" element={<UserDetails />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
          <Route path="/addemployee" element={<AddEmployee />}></Route>
          <Route path="*" element={<h1>not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
