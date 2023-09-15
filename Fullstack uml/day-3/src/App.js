import './App.css';
import './login.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './login.js';
import Signup from './Signup';
import Home from './Home';
import AddOrUpdate from './AddOrUpdate';
import Userlogin from './Userlogin.js';
import Boutique from './Boutique';
import Usersignup from './Usersignup.js';
import BoutiqueHome from './BoutiqueHome';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/boutiquehome" element={<BoutiqueHome/>}></Route>
    <Route path="/" element ={<Boutique />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
    <Route path="/home" element ={<Home />}></Route>
    <Route path="/add" element ={<AddOrUpdate />}></Route>
    <Route path="/update/:id" element ={<AddOrUpdate />}></Route>
    <Route path="/userlogin" element ={<Userlogin />}></Route>
    <Route path="/login" element ={<Login />}></Route>
    <Route path="/usersignup" element ={<Usersignup />}></Route>
  
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;