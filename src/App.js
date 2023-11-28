import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Footer from './components/Home/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import VieworEdit from './components/VieworEdit/VieworEdit';
import Profile from './components/Profile/Profile';
import Wishlist from './components/Wishlist/Wishlist';
import MyListings from './components/MyListings/MyListings';

function App() {
  return (
    <div className="App">
      
     {/*<Home/>
     <Search/>*/}
     <BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="search" element={<Search />}/> 
    <Route path="edit" element={<VieworEdit />}/> 
    <Route path="view" element={<VieworEdit />}/> 
    <Route path="profile" element={<Profile />}>
      <Route path="wishlist" element={<Wishlist />}/>
      <Route path="mylisting" element={<MyListings />}/>
      </Route> 
   
</Routes>
</BrowserRouter>
      
    </div>
  );
}

export default App;
