import style from './Details.module.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Details(){
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
    });
    return setCharacter({});
    }, [id]);

    return(
        <div>{
            character.name &&  
            <div className = {style.container}>
                    <div className={style.title}>{character.name}</div>
                    <div className={style.img}><img src={character.image} alt='Imsage Not Found'></img></div>
                    <div className={style.stats}><b>Status:</b>{character.status}</div>
                    <div className={style.stats}><b>Species:</b>{character.species}</div>
                    <div className={style.stats}><b>Species:</b>{character.species}</div>
                    <div className={style.stats}><b>Gender:</b>{character.gender}</div>
                    <div className={style.stats}><b>Origin:</b>{character.origin.name}</div>
                    
            </div>
            }
        </div>
    )
}