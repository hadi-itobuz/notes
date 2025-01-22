import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken';
const sendEmail = (emailID) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "hadi@itobuz.com",
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const token = jwt.sign({
        data: 'Token Data'
    }, process.env.SECRET_KEY, { expiresIn: '5m' }
    );
    // console.log('token sent :>> ', token);
    const mailConfigurations = {
        from: 'hadi@itobuz.com',
        to: `hadi@itobuz.com`,//replace with ${emailID}
        subject: 'Email Verification',
        text: `Hi! There, You have recently visited 
               our website and entered your email.
               Please follow the given link to verify your email
               http://localhost:3000/register/${token} 
               Thanks`
    };

    transporter.sendMail(mailConfigurations, function (error, info) {
        if (error) throw Error(error);
        console.log('Email Sent Successfully');
        console.log(info);
    });

    return token;
}
export default sendEmail;