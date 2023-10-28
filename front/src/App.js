import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';

import LoginPage from './pages/LoginPage';
import AppWrapper from './components/AppWrapper';
import SearchPage from './pages/SearchPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppWrapper/>}>
                  <Route path="/login" element={<LoginPage/>}/>
                  <Route path='/search' element={<SearchPage/>}/>
                </Route>
            </Routes>
        </Router>
    )
} 

export default App;