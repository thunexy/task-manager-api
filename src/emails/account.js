const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hello@noieltstocanada.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hello@noieltstocanada.com',
        subject: 'We are sorry to let you go',
        text: `Hello, ${name}. Is there anything we could have done better?`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}