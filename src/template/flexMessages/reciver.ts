import { reciver, flexButtonTemplate } from "../../interface/index";
const receivers = require("../../data/receiver.json");

const flexMessageTemplate = {
  type: "bubble",
  size: "micro",
  header: {
    type: "box",
    layout: "vertical",
    contents: ([] as flexButtonTemplate[]),
    backgroundColor: "#F1F7ED",
    paddingTop: "12px",
    paddingAll: "12px",
    paddingBottom: "12px",
  },
  body: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "button",
        action: {
          type: "postback",
          label: "我要寄件",
          data: "hello",
        },
        style: "primary",
        color: "#7CA982",
      },
    ],
    spacing: "xs",
    paddingAll: "12px",
    margin: "lg",
  },
  styles: {
    footer: {
      separator: false,
    },
  },
};

const flexButtonTemplate = [
  {
    type: "text",
    text: "",
    color: "#243E36",
    align: "start",
    size: "md",
    gravity: "center",
  },
  {
    type: "text",
    text: "",
    color: "#243E36",
    align: "start",
    size: "xs",
    gravity: "center",
    margin: "sm",
  },
  {
    type: "text",
    text: "",
    color: "#243E36",
    align: "start",
    size: "xs",
    gravity: "center",
    margin: "sm",
  },
]

const getFlexMessageData = () => {
  const result: any = [];

  receivers.forEach((receiver: reciver) => {
    const template = JSON.parse(JSON.stringify(flexMessageTemplate));
    const button = JSON.parse(JSON.stringify(flexButtonTemplate));

    const { receiverName, receiverPhone, receiverEmail } = receiver;

    button[0].text = receiverName;
    button[1].text = receiverPhone;
    button[2].text = receiverEmail;

    template.header.contents = button;

    template.body.contents[0].action.data = `我要寄給 ${receiverName}`;
    result.push(template);
  });

  return result;
}

export const flexMessageData: any = {
  type: "carousel",
  contents: getFlexMessageData()
};
