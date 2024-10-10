import {Routes, Route} from 'react-router-dom';

import './App.css';
import NavBar from './routes/navbar/navbar.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';




const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />} >
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={< Authentication />} />
      </Route>
    </Routes>
   
  )
}



export default App;
