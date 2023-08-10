const users = require ("../utils/users")

const login = ((req, res) =>{
    const loger = {
        email: req.query.email, 
        password: req.query.password
    }

    if (users.includes(loger)){
        res(200, json({access: true}))
    }else {
        res(404, "User not found")
    }   
})

module.exports = login