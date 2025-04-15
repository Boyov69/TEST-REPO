/**
 * Simple logger utility with different log levels
 * In production, this could be connected to a service like Sentry
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LoggerOptions {
  enableConsole: boolean;
  minLevel: LogLevel;
}

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
};

class Logger {
  private options: LoggerOptions;

  constructor(options: Partial<LoggerOptions> = {}) {
    this.options = {
      enableConsole: process.env.NODE_ENV !== 'production',
      minLevel: process.env.NODE_ENV === 'production' ? 'warn' : 'debug',
      ...options
    };
  }

  private shouldLog(level: LogLevel): boolean {
    return this.options.enableConsole && LOG_LEVELS[level] >= LOG_LEVELS[this.options.minLevel];
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog('debug')) {
      console.debug(`[DEBUG] ${message}`, ...args);
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog('info')) {
      console.info(`[INFO] ${message}`, ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog('warn')) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  }

  error(message: string, ...args: any[]): void {
    if (this.shouldLog('error')) {
      console.error(`[ERROR] ${message}`, ...args);
    }

    // In a real app, you would send this to a service like Sentry
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry.captureException(new Error(message), { extra: { ...args } });
    }
  }
}

export const logger = new Logger();
