import { Routes, Route } from 'react-router-dom';


import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { New } from '../pages/New';
import { useState } from 'react';


export function AppRoutes() {
  const[isAdmin, setIsAdmin ] = useState(true)
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
        
        { isAdmin && <Route path='/new' element={<New/>}/> }
    </Routes>
  );
}