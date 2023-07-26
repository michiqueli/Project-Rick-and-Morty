import style from './Form.module.css'
import {useState} from 'react'
import validate from './validation';
const Form = ({login}) => {

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "Empty Email",
        password: "Empty Password",
    });

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        
        setErrors(validate({...form, [property]: value}))
        setForm({...form, [property]: value});
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        login(form);
    }

    return (
         <div className={style.formulario}>
            <div className={style.title}>Welcome</div>
            <div className={style.title}>to</div>
            <div className={style.title}>Rick and Morty</div>
            <div className={style.title}>Cards Page</div>
         <form className={errors.email === "ok" && errors.password === "ok"? style.containerOk : style.containerNot} onSubmit={submitHandler}>
                <div className={errors.email === "ok"? style.emailOk : style.emailNot}>
                    <label htmlFor="email"> Email </label>
                    <input
                    type="text" 
                    name="email" 
                    value={form.email}
                    placeholder="Insert a valid Email"
                    onChange={handleChange}   
                    />
                    <span>
                    {errors.email}
                    </span>
                </div>
                <div className={errors.password === "ok"? style.passOk : style.passNot}>
                    <label htmlFor="password"> Pass </label>
                    <input 
                    type="password"
                    name="password"
                    placeholder="6-10 char & least 1 number"
                    value={form.password}
                    onChange={handleChange}
                    />
                    <span>
                    {errors.password}
                    </span>
                </div>
                <div className={style.login}>
                    <button className={errors.email === "ok" && errors.password === "ok"? style.btnOk : style.btnNot} type="submit">Login</button>
                </div>
            </form>
            </div>
    )
}
export default Form
