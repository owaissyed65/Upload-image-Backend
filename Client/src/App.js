import { useContext } from 'react';
import './App.css';
import Context from './UseContext/context';
import { Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';
// import Form from './Component/form/Form';
import FormParent from './Component/form/FormParent';

function App() {
  const context = useContext(Context);
  const { hello } = context;
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={< Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/form/*" element={<FormParent />} />
      </Routes>
    </>
  );
}

export default App;
