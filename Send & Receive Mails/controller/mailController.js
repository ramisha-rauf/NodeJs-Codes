const nodemailer = require('nodemailer')
const {EMAIL , PASSWORD} = require('../sec.env')
const mailgen = require('mailgen')
const { response } = require('express')

// const signup = async(req,res)=>{
//   let testAccount = await nodemailer.createTestAccount()
//   let transporter = nodemailer.createTransport({
//   host: "smtp.forwardemail.net",
//   port: 465,
//   secure: true,
//   auth: {
//     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//     user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
//     pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
//   },
// });

//    let message = {
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     text: "successfully registered with us",
//     html: "<b>Hello world?</b>" // html body
//    }

//    transporter.sendMail(message).then((info)=>{
//     return res.status(201).json({msg:"you should receive an email",
//      info: info.messageId,
//     preview : nodemailer.getTestMessageUrl(info)})
//    }).catch(error=>{
//     res.status(500).json(error)
//    });

//     res.status(201).json("signup successfully....!!")
// }

const getbill= (req,res)=>{
    const {userEmail} = req.body;
    let config = {
        service: 'gmail',
        auth: {
            user : EMAIL,
            pass: PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);
    let mailGenerator = new mailgen({
        theme: 'default',
        product: {
            name:'Ramisha',
            link: 'https://mailgen.js/'
        }
    })

    let response = {
        body:{
            name: "Daily Tution",
            intro: "Your bill has arrived",
            table: {
              data: [
                {
                  item: "Nodemailer Stack Book",
                  description: "A backend application",
                  price: "$10.99"
                }
              ]
        },
        outro: "Looking forward to do more business"
    }
}

    let mail = mailGenerator.generate(response);
 
    let message = {
         from: EMAIL,
         to: userEmail,
         subject: "Place order",
         html: mail
    }

    transporter.sendMail(message).then(()=>{
        return res.status(201).json({
            msg: "You should receive an email"
        })
    }).catch(error=>{
        return res.status(500).json({error})
    })
    res.status(201).json("bills received successfully....!!")
}


module.exports={
     getbill
}