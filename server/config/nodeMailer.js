import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
})

const sendEmail = async ({ to, subject, body }) => {

    try {
        const response = await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: to,
            subject,
            html: body
        })
        return response;
    } catch (error) {
    }
}

export default sendEmail