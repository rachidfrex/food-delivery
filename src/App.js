import './App.css';

import {Routes ,Route} from 'react-router-dom'
 
import Footer from './components/footer';
import Nav from './components/nav';
import Home from './pages/home';
import Product from './pages/product';

function App() {
 

  
  return (
    
    <div className="  text-gray-600  bg-gray-100    " >
     <div>
      <Nav/>
     </div>
  
     
     
     <Routes>
        <Route path="/"  exact element={<Home />}/> 
        <Route path="/product"  element={<Product />} />
        
    </Routes>
    
   
    <div>
      <Footer/>
    
    </div>
    
  
    
  </div>
  );
}

export default App;
