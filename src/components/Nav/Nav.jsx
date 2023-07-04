import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./nav.module.css"
import { Link } from "react-router-dom"

export default function Nav ({onSearch}){
    return <nav className={style.container}>
        <SearchBar onSearch = {onSearch}></SearchBar>
        <button className={style.about}>< Link to ='./About'>About</Link></button>
        <button className={style.home}>< Link to ='./Home'>Home</Link></button>
    </nav>
}