import './css/app.css'
import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './pages/Home';
import Achat from './pages/Achat'
import Contact from './pages/Contact';
import Offres from './pages/Offres';
import Panier from './pages/Panier';
import Vendre from './pages/Vendre';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import {v4 as uuidv4 } from 'uuid'
import { useLocalStorage } from './hooks/useLocalStorage';
import useRecuperation from './hooks/useRecuperation';
import Detail from './pages/Detail';

function App() {
  const [maisons, setMaisons ] = useState([]);
  const STORAGE_KEY = "maisons";
  const [storedMaisons, setStoredMaisons] = useLocalStorage(STORAGE_KEY, []);
  

  useEffect(() => {
    console.log("useEffect!!");
    setMaisons(storedMaisons)
 
  }, []);
  
  useEffect(() => {
    console.log("useEffect with techos");
    setStoredMaisons(maisons);
 
  }, [maisons]);

  function handleMaison(maison) {
    console.log('handleMaison', maison);
    setMaisons([...maisons, {...maison, maisonid: uuidv4()}]);
    fetch(' http://localhost:8000/maisons',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(maison)
    }
    ).then( () => {
      console.log('Articles ajouter avec succes');
    
    
     
    })
  }

  
  function handleDeleteMaison(id) {
    setMaisons(maisons.filter((mai) => mai.maisonid !== id));
  }
  return (
    <>
         <Menu />
         
        <Routes>
          <Route path='/' element={<Home maisons={maisons} handleDeleteMaison={handleDeleteMaison}/>} ></Route>
          <Route path='/achat' element ={<Achat maisons={maisons} handleDeleteMaison={handleDeleteMaison}/>} ></Route>
          <Route  path='/contact' element={<Contact />} ></Route>
          <Route path='/offres' element={<Offres />} ></Route>
          <Route path='/panier' element={<Panier />} ></Route>
          <Route path='/vendre' element={<Vendre handleMaison={handleMaison}/>} ></Route>
          <Route path='/maisons' element={<Detail />} />
        </Routes> 
    
    </>
  );
}

export default App;
