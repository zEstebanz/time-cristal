import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/HomePage';
import Register from '../pages/Register';
import TimeCrystal from '../pages/TimeCrystal';
import Notes from '../pages/Notes';
import Rutine from '../pages/Rutine';
import Calendar from '../pages/Calendar';
import Projects from '../pages/Projects';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/timecrystal' element={<TimeCrystal />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/rutine' element={<Rutine />} />
        </Routes>
    )
}

export default AppRouter;
