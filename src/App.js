import React from 'react'
import{BrowserRouter,Route, Routes} from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/Register';
import Dashboard from './pages/quotes';



function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          
        <Route exact path='/' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register'  element={<Register/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
