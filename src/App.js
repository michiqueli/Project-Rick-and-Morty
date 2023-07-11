import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Details from './components/Details/Details';
import Form from './components/Form/Form';

import styles from './App.module.css';

import {useState} from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function App() {
   const [characters, setCharacters] = useState([]);
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
   const location = useLocation();
      return (
         <div className={styles.App}>
            {location.pathname !== '/' && <Nav onSearch = {onSearch}/>}
            <Routes>               
               <Route path= '/' element = {<Form/>}/>
               <Route path = '/home' element = {<Cards characters={characters} onClose={onClose}/>}/>
               <Route path = '/about' element ={<About/>}/>
               <Route path = '/detail/:id' element = {<Details/>}/>
            </Routes>
         </div>
      )
}
export default App;