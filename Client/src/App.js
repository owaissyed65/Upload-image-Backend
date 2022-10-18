import { useContext } from 'react';
import './App.css';
import Context from './UseContext/context';
import { Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Form from './Component/form/Form';

function App() {
  const context = useContext(Context);
  const { hello } = context;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={< Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </>
  );
}

export default App;
