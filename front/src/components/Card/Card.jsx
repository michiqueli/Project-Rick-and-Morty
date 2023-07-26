import style from "./Card.module.css";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { addFav, removeFav} from '../../Redux/actions'
import { connect } from 'react-redux'
function Card({onClose, name, image, id, addFav, removeFav, onFavourites, myFavourites}) {
   
   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavourites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavourites]);

   const handleFavourite = () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else {
         setIsFav(true)
         addFav(id)
      }
   }
   
   return (
      <div className={style.container} style={{ backgroundImage: `url(${image})` }}>
         {
         isFav ? (
         <button className={style.favBtn}onClick={handleFavourite}>❤️</button>
          ) : (
         <button className={style.favBtn}onClick={handleFavourite}>🤍</button>
         )
         }
         <button className={style.button} onClick={()=>onClose(id)}>X</button>
         <div className={style.name}>{name}</div>
         <div className={style.Details}>
         <Link to = {`/detail/${id}`}><button className={style.btnDet}>Details</button></Link>
         </div>
      </div>
   );
}
export function mapStateToProps (state) {
   return{
      myFavourites: state.myFavourites
   }
}
export function mapDispatchToProps (dispatch){
   return{
      addFav: function (character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}
export default connect (mapStateToProps, mapDispatchToProps)(Card)