import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Details from './components/Details/Details';
import Form from './components/Form/Form';
import Favourites from './components/Favourites/Favourites';

import styles from './App.module.css';

import {useEffect, useState} from 'react';
import axios from 'axios';
import {Route, Routes, useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   const EMAIL = "michiqueli@gmail.com";
   const PASSWORD = "Nico1234";

   function login (form) {
      if (form.password === PASSWORD && form.email === EMAIL){
         setAccess(true);
         navigate('/home')
      }else{
         alert("Invalid Username or Password")
      }
   }
   
   useEffect (() => {
      !access && navigate('/');
      },[access]);
   
   const onSearch = (id) =>{
      if(!!characters.find((character) => character.id == id))
         return window.alert("Esa Carta ya fue Agregada")
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((characters) => [...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = (id) => {
      setCharacters(characters.filter((characters) => characters.id !== id))
   }
      return (
         <div className={styles.App}>
            {location.pathname !== '/' && <Nav onSearch = {onSearch}/>}
            <Routes>               
               <Route path= '/' element = {<Form login = {login}/>}/>
               <Route path = '/home' element = {<Cards characters={characters} onClose={onClose}/>}/>
               <Route path = '/about' element ={<About/>}/>
               <Route path = '/detail/:id' element = {<Details/>}/>
               <Route path = '/favourites' element = {<Favourites/>}/>
            </Routes>
         </div>
      )
}
export default App;