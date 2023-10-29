import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

import LoginPage from './pages/LoginPage';
import PublishRoutes from './components/PublishRoutes';
import SearchPage from './pages/SearchPage';
import NoMatchPage from './pages/NoMatchPage';
import HomePage from './pages/HomePage';
import AuthorizationRoutes from './containers/AuthorizationRoutes';
import ForbiddenPage from './pages/ForbiddenPage';
import ManagerRoutes from './containers/ManagerRoutes';
import CreateDocumentPage from './pages/CreateDocumentPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PublishRoutes />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path='/search' element={<SearchPage />} />
                    <Route path='/*' element={<NoMatchPage />} />
                </Route>

                <Route path="/user/" element={<AuthorizationRoutes />}>
                    <Route path='/user/search' element={<SearchPage />} />
                </Route>

                <Route path="/manager/" element={<ManagerRoutes />}>
                    <Route path="/manager/create" element={<CreateDocumentPage/>}/>
                </Route>
                <Route path="/forbidden" element={<ForbiddenPage/>}/>
            </Routes>
        </Router>
    )
}

export default App;