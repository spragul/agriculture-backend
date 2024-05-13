import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config();

//mail send
export async function sendmailuser(useremail,link,subjects){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.G_MAIL,
            pass: process.env.G_MAIL_PASSWORD,
        }
    });
    var mailOptions = {
        from: process.env.G_MAIL,
        to: useremail,
        subject: subjects,
        text: link
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return {  rd:false,error}
        } else {
            return {  rd: true, message: "mail send " }
        }
    });
}