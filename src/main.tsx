import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {UserContext}  from './context/UserContext';
import { ErrorContext } from "./context/ErrorContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
    <UserContext>
    <ErrorContext>
        <App />
    </ErrorContext>
    </UserContext>
    </BrowserRouter>
)
