import {scheduleJob} from 'node-schedule'

export const handler = (event, context, callback) => {
  scheduleJob('13 * * * *', date => {
    console.log('job run', date)
  })
}
