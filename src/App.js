import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import { useState } from "react";


function App() {

  const [users,setUsers] = useState([
        {
            username : "adham",
            password : "123"
        }
    ])
return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setUsers={setUsers} />}></Route>
        <Route path='/SignUp' element={<SignUp users={users} setUsers={setUsers} />}></Route>
        <Route path='/landing' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
)
}

export default App;
