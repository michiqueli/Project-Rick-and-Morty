import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"

export default function Nav ({onSearch}){
    return (
        <div className={style.container}>
        <button className={style.about}>< Link to ='./About'>About</Link></button>
        <button className={style.home}>< Link to ='./Home'>Home</Link></button>
        <SearchBar onSearch = {onSearch}></SearchBar>
        </div>
    )
}