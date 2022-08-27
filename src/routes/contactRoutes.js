import { render } from "ejs"
import express, { Router } from "express"
import sgMail from '@sendgrid/mail'
const CONTACT_ROUTER = Router()
let datosRegistro = ''

CONTACT_ROUTER.post("/api/datos", (req,res)=>{
    datosRegistro = req.body //llegan datos
    console.log(req.body)
})

CONTACT_ROUTER.get("/datos", (req, res)=>{
    if(datosRegistro[0].length > 2 && datosRegistro[1].length > 2){
        res.render("datos", {
        name: datosRegistro[0],
        surname: datosRegistro[1],
        text: datosRegistro[2]
    })
    /**
     * Api
     * 
    */
    const apiKey = process.env.SENDGRID_API_KEY;
    sgMail.setApiKey(apiKey)
    const msg = [{
    to: datosRegistro[0]+'@'+datosRegistro[1], // Change to your recipient
    from: 'franciscojoin2@gmail.com', // Change to your verified sender
    subject: 'I received your mail.',
    text: datosRegistro[2],
    html: `<p>I received the email, your message: </br><strong>${datosRegistro[2]}</strong></br> was sucesfully delivered to me, thanks! </br> </p><strong> I implemented an API for this and it seems to be working quite well, thanks :)</strong>`,
    },
    {
        to: 'franciscojoin2@gmail.com', // Change to your recipient
        from: 'franciscojoin2@gmail.com', // Change to your verified sender
        subject: 'Mensaje de mi pagina',
        text: datosRegistro[2],
        html: `<strong>Recibi el siguiente mensaje ${datosRegistro[2]} </strong>`,
    }]
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
    return
}
    else {
        res.render("contact", {contact: "Contact me!"})    
    }
})

export default CONTACT_ROUTER