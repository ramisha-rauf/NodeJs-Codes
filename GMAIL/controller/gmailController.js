//nodemailer used for sending emails through nodejs
const nodemailer = require('nodemailer')
const {EMAIL, PASSWORD} = require('../sec.env')
//mailgen provide email html templates 
const mailgen = require('mailgen')

const getgmail = (req,res)=>{
    const {email}= req.body
    const config ={
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    }

//set email transfer protocol
const transporter = nodemailer.createTransport(config)

const mailgenerator = new mailgen({
    theme: 'default',
    product: {
        name:'Misha',
        link: 'https://mailgen.js/'
    }
})
let response = {
    body:{
        name: "Freelancing Opportunity",
        intro: "Few seats available for newbies",
        table: {
          data: [
            {
              item: "Ese kia dekh rhy ho ? ",
              description: "Itni asani se thori ghr bethy job mil jyegi hath hilao kch kam kro",
              price: "$699.7"
            }
          ]
    },
    outro: "Hopefully I'll never see u again"
}
}

let mail = mailgenerator.generate(response)

const message = {
    from: EMAIL,
    to: email,
    subject: "Typing jobs available",
    html: mail
}
 
transporter.sendMail(message).then(()=>{
        res.status(201).json({
            msg: `You've received a mail`
        })
}).catch((err)=>{
        res.status(500).json({err})
})

res.status(201).json("Email received successfully ......!!")

}




module.exports = {
    getgmail
}