import { FlexContainer } from "@line/bot-sdk";
import { qrcodeData, receiverData } from "../../interface/";
import { hiddenPhoneNumber, deepCopy } from "../../tools/";

const mainTemplate = {
  "type": "bubble",
  "size": "giga",
  "body": {
    "type": "box",
    "layout": "vertical",
    "spacing": "md",
    "contents": [
      {
        "type": "text",
        "text": "QRCODE 已產生，水啦！",
        "wrap": true,
        "weight": "bold",
        "gravity": "center",
        "size": "xl"
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "lg",
        "spacing": "sm",
        "contents": []
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "xs",
        "contents": [
          {
            "type": "image",
            "url": "",
            "aspectMode": "cover",
            "size": "full",
            "margin": "md"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "再寄一個",
                  "data": "再寄一個"
                },
                "style": "primary",
                "color": "#7CA982"
              }
            ],
            "paddingTop": "4px"
          }
        ],
      }
    ]
  }
};

const receiverTemplate = {
  "type": "box",
  "layout": "baseline",
  "spacing": "sm",
  "contents": [
    {
      "type": "text",
      "text": "",
      "color": "#aaaaaa",
      "size": "md",
      "flex": 2
    },
    {
      "type": "text",
      "text": "",
      "wrap": true,
      "size": "md",
      "color": "#666666",
      "flex": 6
    }
  ]
};

export const createQrcodeFlexMsg = (data: qrcodeData): FlexContainer => {
  const flexTemplate = deepCopy(mainTemplate);
  const { name, phone, shop, time, url } = data;
  const receiverData = {
    "收件人": name,
    "電話": hiddenPhoneNumber(phone),
    "門市": shop,
    "日期": time
  }

  Object.keys(receiverData).forEach((key: string) => {
    const template = deepCopy(receiverTemplate);

    const value = receiverData[key as keyof receiverData];
    template.contents[0].text = key;
    template.contents[1].text = value;

    flexTemplate.body.contents[1].contents.push(template)
  })

  flexTemplate.body.contents[2].contents[0].url = url

  return flexTemplate;
};
