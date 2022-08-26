import { render } from "ejs"
import express, { Router } from "express"
import sgMail from '@sendgrid/mail'
const ROUTER = Router()


ROUTER.get("/", (req,res)=>{
    res.render("index", {title: "First website with node!"})
})

ROUTER.get("/about", (req,res)=>{
    res.render("about", {about: "About me"})
})

ROUTER.get("/contact", (req,res)=>{
    res.render("contact", {contact: "Contact me!"})
})



export default ROUTER