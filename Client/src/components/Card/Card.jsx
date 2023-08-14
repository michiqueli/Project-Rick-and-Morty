import style from "./Card.module.css";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { addFav, removeFav} from '../../Redux/actions'
import { connect } from 'react-redux'
export function Card({onClose, name, image, id, gender, addFav, removeFav, myFavourites}) {
   
   const [isFav, setIsFav] = useState(false)
   
   useEffect(() => {
      myFavourites.forEach((fav) => {
         if (fav.id == id) {
            setIsFav(true);
         }
      });
   },[myFavourites, id]);

   const handleFavourite = () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else {
         setIsFav(true)
         addFav({name:name, id:id, onClose:onClose, image:image, gender:gender})
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
export function mapStateToProps (isFav) {
   return{
      myFavourites: isFav.myFavourites
   }
}
export function mapDispatchToProps (dispatch){
   return{
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}
export default connect (mapStateToProps, mapDispatchToProps)(Card)