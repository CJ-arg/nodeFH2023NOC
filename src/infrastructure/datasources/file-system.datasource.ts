import { LogDatasource } from "../../domain/datasources/log.datsource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from "fs";
export class FileSystemDatasource implements LogDatasource {
  private readonly logPath = "losgs/";
  private readonly allLogsPath = "losgs/logs-all.log";
  private readonly midLogsPath = "losgs/logs-medium.log";
  private readonly hiLogsPath = "losgs/logs-high.log";

  constructor() {
    this.createLogsFiles();
  }

  private createLogsFiles = () => {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath);
    }
    [this.allLogsPath, this.midLogsPath, this.hiLogsPath].forEach((path) => {
      if (fs.existsSync(path)) return;
      fs.writeFileSync(path, "");
    });
  };

  saveLog(log: LogEntity): Promise<void> {
    fs.appendFileSync(this.allLogsPath, `${JSON.stringify(log)} \n`);
  }
  getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    throw new Error("Method not implemented.");
  }
}
