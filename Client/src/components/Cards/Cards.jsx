import Card from '../Card/Card';
import style from "./Cards.module.css";

export default function Cards({characters, onClose}) {
   return <div className={style.container}>{characters.map(char => (
      <Card
         key = {char.id}
         id = {char.id}
         name = {char.name}
         image = {char.image}
         onClose = {() => onClose (char.id)}
      />
      ))
   }</div>;
}