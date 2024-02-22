import { LogDatasource } from "../../domain/datasources/log.datsource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class FileSystemDatasource implements LogDatasource {
  private readonly logPath = "losgs/";
  private readonly allLogsPath = "losgs/logs-low.log";

  saveLog(log: LogEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    throw new Error("Method not implemented.");
  }
}
