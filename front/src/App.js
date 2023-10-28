import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import AppWrapper from './components/AppWrapper';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppWrapper/>}>
                  <Route path="/login" element={<LoginPage/>}/>
                </Route>
            </Routes>
        </Router>
    )
} 

export default App;