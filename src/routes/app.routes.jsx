import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Edit } from '../pages/Edit';
import { Favorites } from '../pages/Favorites';
import { MyOrders } from '../pages/MyOrder';
import { New } from '../pages/New';

import { useAuth } from '../hooks/auth';

export function AppRoutes(){

    const { user } = useAuth();
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/details' element={<Details/>}/>
            <Route path='/favorite' element={<Favorites/>}/>
            <Route path='/orders' element={<MyOrders/>}/>
            { user.isAdmin && <Route path='/new' element={<New/>}/> }
            { user.isAdmin && <Route path='/edit/:id' element={<Edit/>}/> } 
        </Routes>
    )
}

