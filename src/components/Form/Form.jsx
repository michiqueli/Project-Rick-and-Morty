import style from './Form.module.css'
import {useState} from 'react'
const validate = (form, setErrors, errors) =>{
    if(!form.email) setErrors({...errors, email: "Email Vacio"});
    
}
const Form = () => {

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
       const property = event.target.name
       const value = event.target.value

       setForm({...form, [property]: value});

       validate({...form, [property]: value}, setErrors, errors)
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        alert("Login Exitoso")
    }

    return (
         <div className={style.formulario}>
            <div className={style.title}>Welcome</div>
            <div className={style.title}>to</div>
            <div className={style.title}>Rick and Morty</div>
            <div className={style.title}>Cards Page</div>
         <form className={style.container} onSubmit={submitHandler}>
                <div className={style.userName}>
                    <label htmlFor="username"> Email </label>
                    <input
                    type="text" 
                    name="username" 
                    value={form.username}
                    onChange={handleChange}    
                    />
                </div>
                <div className={style.pass}>
                    <label htmlFor="password"> Pass </label>
                    <input 
                    type="text"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    />
                </div>
                <div className={style.login}>
                    <button className={style.btn} type="submit">Login</button>
                </div>
            </form>
            </div>
    )
}
export default Form