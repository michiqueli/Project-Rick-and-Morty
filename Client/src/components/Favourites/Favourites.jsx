import React from 'react'
import style from './Favourites.module.css'
import {connect} from 'react-redux'
import Card from '../Card/Card'

function Favourites({myFavourites}) {
    return (
        <><h2> Favourites</h2><div className={style.container}>
            {myFavourites?.map(({ name, image, id, addFav, removeFav, onFavourites, myFavourites }) => (
                <Card
                    key={id}
                    id={id}
                    name={name}
                    image={image}/>
            ))}</div></>
    )
}

export function mapStateToProps(state){
    return{
        myFavourites: state.myFavourites
    }
}

export default connect(mapStateToProps)(Favourites)