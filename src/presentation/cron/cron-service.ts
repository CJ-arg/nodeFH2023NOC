import { CronJob } from "cron";

export class CronService {
  static createJob() {
    const job = new CronJob(
      "*/20 * * * * *", // cronTime
      () => {
        const date = new Date();
        console.log("You will see this message every 20 second", date);
      } // onTick
    );
    job.start();
  }
}
