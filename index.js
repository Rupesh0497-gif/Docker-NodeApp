import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;
import log4js from 'log4js'
import fs from 'fs'
// index.js
const logger = log4js.getLogger();
log4js.configure({
  appenders: {
    "stdout" : { type: "stdout" },
    "file"   : { type: "file", filename: "logs/out.log" }
  },
  categories: { 
    default:  { appenders: [ 'stdout', 'file' ], level: 'debug' }
  }
});
console.error = (...args) => logger.error(...args);
app.use(bodyParser.json());

// Correct route with proper response
app.get('/hello', (req, res) => {
  console.log(yu)
  logger.info("Hey I have printed from hello api.")
  

  res.send(`Hey ${process.env.APP_NAME}, your first Docker app!`);
});
app.get('/welcome', (req, res) => {
  logger.info("Hey I have printed from welcome api.")
  res.send(`Hey ${process.env.APP_NAME}, your first Docker app!`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
