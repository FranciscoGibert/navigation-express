import express from "express"
//git status jejej
import cors from "cors"

import {join} from "path"

import mainRouter from "./src/routes/mainRoutes.js"

import CONTACT_ROUTER from "./src/routes/contactRoutes.js"

const {pathname: root} = new URL('../src', import.meta.url) // no podemos utilizar __dirname en module, import.meta.url nos trae el contexto

let rootCorregido = root.substring(1); //metodo elimina un caraccter

const app = express()

app.use(cors())

app.use(express.json())

app.use('/', mainRouter, CONTACT_ROUTER)

app.set('view engine', "ejs") //express tiene integracion por defecto con ejs

app.set('views', join(rootCorregido, 'views')) // join nos permite prescindir de los slash, separamos por ,

app.use(express.static(join(rootCorregido, 'public')))

const PORT = process.env.PORT
app.listen(PORT, ()=>{ 
    console.log("Server esucuchando en puerto 3000")
    console.log()
})
console.log(rootCorregido)
