import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"

export default function Nav (){
    return <div SearclassName={style.Nav}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    </div>
}