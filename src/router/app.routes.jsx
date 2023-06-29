import { Routes, Route } from 'react-router-dom';


import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { New } from '../pages/New';
import { useAuth } from '../hooks/auth';


export function AppRoutes() {
  const { user } = useAuth();
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        
        { user.isAdmin && <Route path='/new' element={<New/>}/> }
    </Routes>
  );
}