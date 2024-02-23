import { LogDatasource } from "../../datasources/log.datsource";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../log.repository";

export class LogRepositoryImpl implements LogRepository {
  constructor(private logDatasource: LogDatasource) {}

  async saveLog(log: LogEntity): Promise<void> {
    return this.logDatasource.saveLog(log);
  }
  async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    return this.logDatasource.getLogs(severityLevel);
  }
}
