const request = require('request')
const { body } = require('express-validator')
const nodemailer = require('nodemailer')

const contact = [
    (req, res)=>{

        const { name, email, subject, message } = req.body;
        const companyEmail = 'primaryemmy@gmail.com';
        const password = 'Next Step Africa';

        const tranporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: companyEmail,
                pass: password,
            }
        })

        const mailOptions = {
            from: email,
            to: companyEmail,
            subject: `Message from ${email}: ${subject}`,
            text: message
        }

        tranporter.sendMail(mailOptions, (error, info)=>{
            if(error){
                return res.send(error)
            }

            res.send(info.response)
        })
    }
]

module.exports = { contact }