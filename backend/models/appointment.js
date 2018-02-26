// const mongoose = require('mongoose')
// const Twilio = require('twilio')
// const moment = require('moment')
// require('dotenv').config()
// let Schema = mongoose.Schema;

// let AppointmentSchema = new Schema({
//     name: String,
//     phoneNumber: String,
//     notification: Number,
//     timeZone: String,
//     time: {type : Date, index: true}
// })

// AppointmentSchema.methods.requireNotication = (date) => {
//     return Math.round(moment.duration(moment(this.time).tz(this.timeZone).utc()
//     .diff(moment(date).utc())
//     ).asMinutes()) === this.notification
// }

// AppointmentSchema.statics.sendNotifcations = (callback) => {
//     const searchDate = new Date()
//     Appointment
//         .find()
//         .then(function(appointments){
//             appointments = appointments.filter(function(appointments){
//                 return appointment.requireNotication(searchDate);
//             }) 

//             if (appointment.length > 0) {
//                 sendNotifcations(appointments)
//             }
//         })
//         //send messages to people
//     sendNotifcations = (appointments) => {
//         const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
//         appointments.forEach(function(appointment){
//             const options = {
//                 to: ` + ${appointment.phoneNumber}`,
//                 from: process.env.PHONE_NUMBER,
//                 body: `Hi ${appointment.name}. Just a reminder its the end of school`,
//             }

//             //send message
//             client.messages.create(options, (err, response) => {
//                 if (err) {
//                     console.log(err)
//                 } else {
//                     let masked = appointment.phoneNumber.substr(0,
//                         appintment.phoneNumber.length - 5)
//                         masked += '*****'
//                         console.log(`message sent to ${masked}`)
//                 }
//             })
//         })

//         if (callback) {
//             callback.call()
//         }
//     }
// }

// let Appointment = mongoose.model('Appointment', AppointmentSchema)

// module.exports = Appointment;