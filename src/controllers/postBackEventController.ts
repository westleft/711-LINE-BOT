import { WebhookEvent, MessageAPIResponseBase, FlexMessage } from '@line/bot-sdk';
import { postCreateOrder } from "../api/";
import { sender, receiver } from "../interface/";
import { createQrcodeFlexMsg } from "../template/flexMessages/qrcode";
import { flexMessageData } from "../template/flexMessages/receiver";

const client = require("../config").client;
const FormData = require("form-data");

const senderData = require("../data/sender.json");
const receiverData = require("../data/receiver.json");

export const postBackHandler = async (
  event: WebhookEvent
): Promise<MessageAPIResponseBase | undefined> => {    

  if (event.type !== "postback") return;

  const { replyToken } = event;
  
  // postback 按鈕的文字
  const { data } = event.postback;

  if (data === "再寄一個") {
    const response: FlexMessage = {
      type: "flex", 
      altText: "請選擇收件人",
      contents: flexMessageData
    };
  
    // Reply to the user.
    await client.replyMessage(replyToken, response);
    return;
  }

  if (!data.includes("我要寄給")) return;

  // 寄件人姓名
  const receiverName = data.split(" ")[1];

  const receiverDetail = receiverData.filter((receiver: receiver) => {
    return receiverName === receiver.receiverName;
  })

  // 打 API 的主要資料
  const fullData = {...receiverDetail[0], ...senderData};

  // 逐一加進 formdata
  const formdata = new FormData()
  Object.keys(fullData).forEach((key: string) => {
    const value = fullData[key];
    formdata.append(key, value);
  });

  const orderResponse = await postCreateOrder(formdata);
  const { PaymentNo, ValidationNo } = orderResponse.data;

  // 製作 qrcode 的 flex message
  const { receiverPhone, sendStore } = fullData;
  const currentTime = new Date().toLocaleString("zh-tw", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  const flexMessage = createQrcodeFlexMsg({
    name: receiverName,
    phone: receiverPhone,
    shop: sendStore,
    time: currentTime,
    url: `https://epayment.7-11.com.tw/C2C/C2CWeb/QRCode.ashx?CodeValue=${PaymentNo + ValidationNo}`
  });

  const response: FlexMessage = {
    type: "flex", 
    altText: `${receiverName} 的 QRCODE`,
    contents: flexMessage
  };
 
  await client.replyMessage(replyToken, response);
};
