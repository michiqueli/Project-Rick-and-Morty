import style from "./Card.module.css";
import { Link } from 'react-router-dom'
export default function Card({onClose, name, status, species, gender, origin, image, id}) {
   return (
      <div className={style.container} style={{ backgroundImage: `url(${image})` }}>
         <button className={style.button}onClick={onClose}>X</button>
         <Link to = {`/detail/${id}`} className={style.link}></Link>
         <div className={style.name}>{name}</div>
         <div className={style.species}>{species}</div>
         <div className={style.gender}>{gender}</div>
      </div>
   );
}