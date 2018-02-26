require('dotenv').config()
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

exports.sendingMessage = (req,res) => {
    console.log(req.body)
    client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: req.body.to,
    body: req.body.body
})
    .then((message) => {
        console.log(message.sid)
        res.send(message)
        }
    )
}


// module.exports = sendingMessage
