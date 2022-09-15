import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Landing from './LandingPage';
import Products from './Products';
import Cart from './Cart';
import Checkout from './Checkout';

const AppRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/Login' element ={<Login />}/>
                <Route path='/' element={<Landing />}/>
                <Route path='/Products' element={<Products />}/>
                <Route path='/Cart' element={<Cart />}/>
                <Route path='/Checkout' element={<Checkout />}/>
            </Routes>
        </Router>
    )
}
export default AppRoutes; 