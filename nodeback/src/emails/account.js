const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'shivampradhan21@gmail.com',
        subject: 'Test mail',
        text: `Welcome to ${name}.`
    })  
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'shivampradhan21@gmail.com',
        subject: 'Goodbye mail',
        text: `Goodbye, ${name}.hope to see you back soon.`})}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}