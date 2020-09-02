import {scheduleJob} from 'node-schedule'

scheduleJob('13 * * * *', date => {
  console.log('job run', date)
})
