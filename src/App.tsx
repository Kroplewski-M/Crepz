import { Nav } from "./components/Nav"
import { Home } from "./Pages/Home"
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Profile } from "./Pages/Profile";
import {UserContext}  from './context/UserContext';
import { useState } from "react";
import { Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen relative">
        <UserContext>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <div className="pt-16">
              <footer className='w-[100vw] h-[80px] bg-[#333333] text-gray-500 grid place-content-center mt-16 text-[12px] md:text-[16px] absolute bottom-0 z-50'>
                  <p>© 2023 Crepz, Inc. All Rights Reserved</p>
                  <p>Web app made by Mateusz Kroplewski</p>
              </footer>

          </div>
        </UserContext>

      </div>
    </div>
  )
}

export default App
