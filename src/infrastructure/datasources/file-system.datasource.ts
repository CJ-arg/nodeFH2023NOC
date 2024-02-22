import { LogDatasource } from "../../domain/datasources/log.datsource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from "fs";
export class FileSystemDatasource implements LogDatasource {
  private readonly logPath = "losgs/";
  private readonly lowLogsPath = "losgs/logs-low.log";
  private readonly midLogsPath = "losgs/logs-medium.log";
  private readonly hiLogsPath = "losgs/logs-high.log";

  constructor() {
    this.createLogsFiles();
  }

  private createLogsFiles = () => {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath);
    }
  };
  saveLog(log: LogEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    throw new Error("Method not implemented.");
  }
}
