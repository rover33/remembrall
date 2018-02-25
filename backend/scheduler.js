const CronJob = require ('cron').CronJob
const notificationsWorker = require('./workers/notificationsWorker')
const moment = require('moment')

const schedulerFactory = () => {
    return {
        start: function(){
            new CronJob('00 * * * * *', () => {
                console.log(`running send notifcations ${moment().format()}`)
                notificationsWorker.run()
            }, null, true, '')
        }
    }
}

module.exports = schedulerFactory()
