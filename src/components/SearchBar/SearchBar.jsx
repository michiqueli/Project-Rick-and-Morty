import style from "./SearchBar.module.css"
export default function SearchBar(props) {
   return (
      <div className={style.container}>
         <input className={style.in} type='search'></input>
         <button className={style.btn} onClick={props.onSearch}>AGREGAR</button>
      </div>
   );
}