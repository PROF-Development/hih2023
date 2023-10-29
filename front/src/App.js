import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

import LoginPage from './pages/LoginPage';
import AppWrapper from './components/AppWrapper';
import SearchPage from './pages/SearchPage';
import NoMatchPage from './pages/NoMatchPage';
import HomePage from './pages/HomePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppWrapper/>}>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/login" element={<LoginPage/>}/>
                  <Route path='/search' element={<SearchPage/>}/>
                  <Route path='/*' element={<NoMatchPage/>}/>
                </Route>
            </Routes>
        </Router>
    )
} 

export default App;