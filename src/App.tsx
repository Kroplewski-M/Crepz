import { Nav } from "./components/Nav"
import { Home } from "./Pages/Home"
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Profile } from "./Pages/Profile";
import {UserContext}  from './context/UserContext';
import { useState } from "react";
import { Route, Routes  } from 'react-router-dom';

function App() {
  const [user,setUser] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={{user,setUser}}>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
