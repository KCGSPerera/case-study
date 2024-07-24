const cron = require('node-cron');

const shell = require('shelljs');

cron.schedule("* * * * * *", function(){
    console.log("This is my first CRON JOBS scheduler...")
});

// * * * * * *
// In the above pattern  the frist * reppresent seconds , second * represents minutes and likewise
// You can sinply change the value and manipulate the duration in which the event occur
// for example
// 2 * * * * *
// * 3 * * * * 
// 3 2 3 * * *
