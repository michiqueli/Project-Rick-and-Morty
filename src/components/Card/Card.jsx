import style from "./Card.module.css";
import { Link } from 'react-router-dom'
export default function Card({onClose, name, status, species, gender, origin, image, id}) {
   return (
      <div className={style.container} style={{ backgroundImage: `url(${image})` }}>
         <button className={style.button}onClick={onClose}>X</button>
         <div className={style.name}>{name}</div>
         <div className={style.Details}>
         <Link to = {`/detail/${id}`}><button className={style.btnDet}>Details</button></Link>
         </div>
      </div>
   );
}