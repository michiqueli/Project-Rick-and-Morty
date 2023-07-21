const regexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{3})+$/;
const regexPass = /^(?=.*\d).{6,10}$/

const validate = (form) =>{

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