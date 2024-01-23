import { CronJob } from "cron";

export class Server {
  public static start() {
    console.log("Server started...");

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
