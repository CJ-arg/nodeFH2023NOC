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

  async saveLog(newlog: LogEntity): Promise<void> {
    const logAsJson = `${JSON.stringify(newlog)} \n`;
    fs.appendFileSync(this.allLogsPath, logAsJson);
    if (newlog.level === LogSeverityLevel.low) return;
    if (newlog.level === LogSeverityLevel.medium) {
      fs.appendFileSync(this.midLogsPath, logAsJson);
    } else {
      fs.appendFileSync(this.hiLogsPath, logAsJson);
    }
  }

  private getLogsFromFile = (path: string): LogEntity[] => {
    const content = fs.readFileSync(path, "utf-8");
    const stringLogs = content
      .split("\n")
      .map((log) => LogEntity.fromJson(log));
    return logs;
  };

  async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    switch (severityLevel) {
      case LogSeverityLevel.low:
        return [];
      case LogSeverityLevel.medium:
        return [];
      case LogSeverityLevel.high:
        return [];
      default:
        new Error(`${severityLevel} not implemented`);
    }
  }
}
