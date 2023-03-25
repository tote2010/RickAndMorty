import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Form } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Card from './components/Card/Card.jsx';
import Detail from './components/Detail/Detail.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';

function App () {


  const navigate = useNavigate();
  const [access, setAccess] = React.useState(false);
  const username = 'tote@tote.com';
  const password = 'tote';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
    }
  }

  useEffect(() => {
        !access && navigate('/');
    }, [access]);

    function handleSubmit(){

    }
    
  return (
    <div className='App' style={{ padding: '25px' }}>
     
      <Form />
      <Nav />
      <Routes>
        <Route path="/form" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes>
        
    </div>
  )
}

export default App;
