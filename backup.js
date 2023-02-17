 require('dotenv').config();
 const CronJob = require("cron").CronJob;
 const Rsync = require("rsync");


rsync = new Rsync()
  .executable("robocopy")
 .flags("a")


 .source(process.env.SOURCE_DIR)
 .destination(process.env.DESTINATION_DIR);

const job = new CronJob(
    process.env.CRON_STRING, 
    () => {
        rsync.execute((error,code,cmd) => {
    console.log("Backup Complete with status:" + code);

});
    },
    null,true,
    "America/toronto"
);

job.start();
