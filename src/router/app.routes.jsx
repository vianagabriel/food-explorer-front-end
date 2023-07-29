import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { New } from '../pages/New';
import { Edit } from '../pages/Edit';
import { Favorites } from '../pages/Favorites';
import { MyOrders } from '../pages/MyOrder';
import { useAuth } from '../hooks/auth';

export function AppRoutes() {
  const { user } = useAuth();
  const isAdmin = user && typeof user.isAdmin === 'function' ? user.isAdmin() : false;

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/orders' element={<MyOrders/>}/>
      {isAdmin && <Route path='/new' element={<New/>}/> }
      {isAdmin && <Route path='/edit/:id' element={<Edit/>}/> }
    </Routes>
  );
}
