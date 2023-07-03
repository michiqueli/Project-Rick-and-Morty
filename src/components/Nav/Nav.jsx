import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"

export default function Nav ({onSearch}){
    return <nav className={style.container}>
        <SearchBar onSearch = {onSearch}/>
    </nav>
}