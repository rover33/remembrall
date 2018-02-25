require('dotenv').config()
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.end.CELL_PHONE_NUMBER,
    body: "hey Annie I can send messages from the matrix"
})
    .then((message) => console.log(message.sid))