import style from "./Card.module.css";

export default function Card({onClose, name, status, species, gender, origin, image}) {
   return (
      <div className={style.container} style={{ backgroundImage: `url(${image})` }}>
         <button className={style.button}onClick={onClose}>X</button>
         <div className={style.name}>{name}</div>
         <div className={style.species}>{species}</div>
         <div className={style.gender}>{gender}</div>
      </div>
   );
}