import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Workshop from './Workshop';

function App() {
  return (
    <>
    <Routes>
 <Route path='/'element={<Workshop/>}/>
 </Routes>
    </>
  
  );
}

export default App;
