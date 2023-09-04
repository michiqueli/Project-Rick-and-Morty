const express = require('express');
const mainRouter = require("./routes/routes")
const server = express();
const PORT = 3001;
const cors = require ("cors")
const {conn, User} = require ('./DB_connection')
server.use(cors())

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use (express.json())

server.use ('/rickandmorty', mainRouter)

/*server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});*/
conn.sync({force: true})
.then(() => {
   server.listen(PORT, () => {
      console.log(`Servidor en puerto ${PORT}`)
   })
})
.then(async () => {
   try{
      const newUser = await User.create({
         email: "Nico@mail.com",
         password: "12345"
      })
   }catch (error) {
      console.log(error)
   }}

)
.catch(error => {
   console.log(error)
})
