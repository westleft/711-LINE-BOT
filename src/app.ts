import express, { Application } from 'express';
import router from "./routes/route"

require("dotenv").config();

const app: Application = express();
app.use("/webhook", router);

// Bot所監聽的webhook路徑與port
app.listen(process.env.PORT || 6000, function () {
  console.log("[BOT已準備就緒]");
});
