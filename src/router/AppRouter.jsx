import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/HomePage';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default AppRouter;
