import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"

export default function Nav (){
    return <div className={style.container}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    </div>
}