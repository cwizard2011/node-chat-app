const moment = require('moment');

// const date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(3, 'years').subtract(9, 'months')
// console.log(date.format('MMM Do, YYYY'))

const someTimestamp = moment().valueOf();
console.log(someTimestamp)

const date= moment();
console.log(date.format('h:mm a'))