const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mail.smt25@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mail.smt25@gmail.com',
        subject: 'We are sad to see you go!',
        text: `We are sad to see you go ${name}. Please let us what we can do to improve.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}