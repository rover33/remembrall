require('dotenv').config()
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
const cron = require('node-cron')
// const schedule = require('node-schedule')





exports.sendingMessage = (req,res) => {
    // cron.schedule('* 11 22 26 2 0', (startDate) =>{
    client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: req.body.to,
    body: req.body.body,
    // })
})
    .then((message) => {
        console.log(message.sid)
        res.send(message)
        }
    )
}




// module.exports = sendingMessage
