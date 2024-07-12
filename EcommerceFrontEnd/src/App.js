import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import PopularProduct from './Components/PopularProduct/PopularProduct';
import LatestProduct from './Components/LatestProduct/LatestProduct';
import XclusiveMail from './Components/XclusiveMail/XclusiveMail';
import Footer from './Components/Footer/Footer';
import {Route , Routes} from "react-router-dom";
import Account from './Components/Account/Account';


const App = () => {

  

  return (
    <div className=''>
      <Routes>
          <Route path='/' element={ 
              <>
                 <Navbar/>
                  <Carousel/>
                  <PopularProduct/>
                  <LatestProduct/>
                  <XclusiveMail/>
                  <Footer/>
              </>
          }/>

          

          <Route path='/account/*' element={<Account/>} />


      </Routes>
    </div>
  )
}

export default App