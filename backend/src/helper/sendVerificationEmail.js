import nodemailer from 'nodemailer'
import generateToken from './genrateToken.js';

import hbs from "nodemailer-express-handlebars";


const sendEmail = (emailID, userId) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "hadi@itobuz.com",
            pass: process.env.EMAIL_PASSWORD
        }
    });
    transporter.use('compile', hbs({
        viewEngine: {
            extname: '.hbs',
            layoutsDir: './src/views',
            defaultLayout: false,
            partialsDir: './src/views',
        },
        viewPath: './src/views',
        extName: '.hbs'
    }));
    const registerToken = generateToken('registrationToken', userId, '15m');

    // console.log('token sent :>> ', token);
    const mailConfigurations = {
        from: 'hadi@itobuz.com',
        to: `hadi@itobuz.com`,//replace with ${emailID}
        subject: `Email Verification: ${emailID}`,
        template: 'verificationEmail',
        context: {
            registerToken: `${registerToken}`
        }
    };

    transporter.sendMail(mailConfigurations, function (error, info) {
        if (error) throw Error(error);
        console.log('Email Sent Successfully');
    });

    return registerToken;
}
export default sendEmail;