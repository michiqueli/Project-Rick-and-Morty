const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
const regexPass = /^(?=.*\d).{6,10}$/

const validate = (form) =>{
    
    /*if(!form.email) setErrors({...errors, email: "Empty 2 Email"});
    else{    
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email))
        setErrors({...errors, email: "ok"})
        else setErrors({...errors, email : "Invalid Email"});
    }
    if(!form.password) setErrors({...errors, password: "Empty Password"});
    else{
        if (/^(?=.*\d).{6,10}$/.test(form.password)) 
        setErrors({...errors, password: "ok"})
        else setErrors({...errors, password : "Invalid Password"})
    }*/
    const errors = {}

    if (!form.email) errors.email = "Empty Email"
    else if (!regexEmail.test(form.email)) errors.email = "Invalid Email"
    else errors.email = "ok"

    if (!form.password) errors.password = "Empty Password"
    else if (!regexPass.test(form.password)) errors.password = "Invalid Password"
    else errors.password = "ok"
    return errors
}
export default validate;