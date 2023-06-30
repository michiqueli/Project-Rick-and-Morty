import Card from '../Card/Card';
import style from "./Cards.module.css";

export default function Cards({characters}) {
   return <div className={style.container}>{characters.map(char => (
      <Card
         key = {char.id}
         name = {char.name}
         status = {char.status}
         species = {char.species}
         gender = {char.gender}
         origin = {char.origin}
         image = {char.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
      />
      ))
   }</div>;
}
