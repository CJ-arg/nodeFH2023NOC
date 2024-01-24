import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
  public static start() {
    console.log("Server started...");

    CronService.createJob(
      "*/5 * * * * *", // cronTime
      () => {
        new CheckService().execute("https://google.com");
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
