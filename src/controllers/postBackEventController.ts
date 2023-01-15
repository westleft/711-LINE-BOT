import { WebhookEvent, TextMessage, MessageAPIResponseBase, FlexMessage } from '@line/bot-sdk';
const client = require("../config").client

export const postBackHandler = async (
  event: WebhookEvent
): Promise<MessageAPIResponseBase | undefined> => {    

  if (event.type !== "postback") return;
  
  // console.log("qq", event.postback);

//   await client.replyMessage(replyToken, response);
};
