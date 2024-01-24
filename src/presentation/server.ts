import { CronService } from "./cron/cron-service";

export class Server {
  public static start() {
    console.log("Server started...");

    CronService.createJob(
      "*/5 * * * * *", // cronTime
      () => {
        const date = new Date();
        console.log("You will see this message every 5 seconds", date);
      }
    );
    // CronService.createJob(
    //   "*/2 * * * * *", // cronTime
    //   () => {
    //     const date = new Date();
    //     console.log("You will see this message every 2 seconds", date);
    //   }
    // );
    // CronService.createJob(
    //   "*/3 * * * * *", // cronTime
    //   () => {
    //     const date = new Date();
    //     console.log("You will see this message every 3 seconds", date);
    //   }
    // );
  }
}
