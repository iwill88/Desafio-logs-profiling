const Log4js = require('log4js');

/* ------------------ Log4js -------------------- */

Log4js.configure({
    appenders: {
      loggerConsole: { type: "console" },
      infoConsole: { type: "console"},
      loggerWarnFile: {type:"file", filename: "warn.log"},
      loggerErrFile:{type:"file", filename: "error.log"},

      loggerInfo: { appender: "infoConsole", type: "logLevelFilter", level: "info"},
      loggerWarns: {  appender: "loggerWarnFile", type: "logLevelFilter", level: "warn"},
      loggerErrors: { appender: "loggerErrFile", type: "logLevelFilter", level: "error"},
        
    },
    categories: {
      default: {
        appenders: ["infoConsole"],
        level:"trace",
      },
      info: {
        appenders: ["loggerInfo"],
        level:"all",
      },
      warn: {
        appenders: ["loggerWarns", "loggerConsole"],
        level:"all",
      },    
      error:{
        appenders:["loggerErrors", "loggerConsole"],
        level:"all"
      }
    }
  })
  
const logger = Log4js.getLogger('info');
const loggerWarn = Log4js.getLogger("warn");
const loggerError = Log4js.getLogger("error");

module.exports = {logger,loggerWarn, loggerError};