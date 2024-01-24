import { CronJob } from "cron";

export class CronService {
  static createJob(): CronJob {
    const job = new CronJob(
      "*/10 * * * * *", // cronTime
      () => {
        const date = new Date();
        console.log("You will see this message every 10 second", date);
      } // onTick
    );
    job.start();
    return job;
  }
}
