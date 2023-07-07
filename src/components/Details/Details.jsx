import style from './Details.module.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Details(){
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
                    <h2 className={style.h2}>{character.name}</h2>
                    <h1 className={style.h1}><b>Status:</b>{character.status}</h1>
                    <h1 className={style.h1}><b>Species:</b>{character.species}</h1>
                    <h1 className={style.h1}><b>Species:</b>{character.species}</h1>
                    <h1 className={style.h1}><b>Gender:</b>{character.gender}</h1>
                    <h1 className={style.h1}><b>Origin:</b>{character.origin.name}</h1>
                    <img src={character.image} alt='Imsage Not Found' />
                    
            </div>
            }
        </div>
    )
}