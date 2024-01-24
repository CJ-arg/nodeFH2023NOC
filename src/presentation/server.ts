import { CronService } from "./cron/cron-service";

export class Server {
  public static start() {
    console.log("Server started...");

    CronService.createJob(
      "*/10 * * * * *", // cronTime
      () => {
        const date = new Date();
        console.log("You will see this message every 10 seconds", date);
      }
    );
  }
}
