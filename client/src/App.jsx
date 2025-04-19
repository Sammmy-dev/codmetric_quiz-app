import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Home from './pages/Home';

function App() {
  return (
    <div>
       <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/result' element={<Result />} />

          {/* <Route element={<PrivateRoutes/>}>
              <Route path='/profile' element={<Profile/>} />
          </Route> */}
    
    </Routes>
    </BrowserRouter>
    </div>
   
  )
}

export default App
