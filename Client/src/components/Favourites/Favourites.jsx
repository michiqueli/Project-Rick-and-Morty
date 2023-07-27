import Card from '../Card/Card';
import { connect, useDispatch } from "react-redux"
import style from "./Favourites.module.css"
import { filterFav, orderFav } from '../../Redux/actions';
import { useState } from 'react';

function Favourites({myFavourites}) {
    const [aux,setAux]=useState(false)

    const dispatch= useDispatch()
  
    const handleOrder=(e)=>{
      dispatch(orderFav(e.target.value))
      setAux(!aux)
    }
    const handleFilter=(e)=>{
      dispatch(filterFav(e.target.value))
    }
    return (
        <>
        <div className={style.favBar}>
            <div className={style.filters}>
            
                <select className={style.selectors} onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
            <div className={style.tit}>
                Filters
            </div>
                <select className={style.selectors} onChange={handleFilter}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
        </div><>
    <h1> Favourites</h1>
    <div className={style.container}>
            {myFavourites?.map((fav) => (
                <Card
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    image={fav.image}
                    species={fav.species}
                    gender={fav.gender}
                    origin={fav.origin}
                    />
            ))}</div></></>
    )
}

export function mapStateToProps(isFav){
    return{
        myFavourites: isFav.myFavourites
    }
}

export default connect(mapStateToProps)(Favourites)