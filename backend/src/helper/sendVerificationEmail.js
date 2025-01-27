import nodemailer from 'nodemailer'
import generateToken from './genrateToken.js';
const sendEmail = (emailID, userId) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "hadi@itobuz.com",
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const token = generateToken(userId);

    // console.log('token sent :>> ', token);
    const mailConfigurations = {
        from: 'hadi@itobuz.com',
        to: `hadi@itobuz.com`,//replace with ${emailID}
        subject: `Email Verification: ${emailID}`,
        text: `Hi! There, You have recently visited 
               our website and entered your email.
               Please follow the given link to verify your email
               http://localhost:3000/user/verify/${token} 
               Thanks`
    };

    transporter.sendMail(mailConfigurations, function (error, info) {
        if (error) throw Error(error);
        console.log('Email Sent Successfully');
    });

    return token;
}
export default sendEmail;