'use strict'

const Appointment = require('../models/appointment')

const notificationWorkerFactory = () => {
    return {
        run: function(){
            Appointment.sendNotifications()
        }
    }
}

module.exports = notificationWorkerFactory()