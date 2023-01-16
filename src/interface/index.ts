export interface flexButtonTemplate {
  type: string;
  text: string;
  color: string;
  align: string;
  size: string;
  gravity: string;
  margin?: string;
}

export interface flexTemplate {
  type: string;
  contents: object;
}

export interface sender {
  orderAmount: string;
  senderName: string;
  senderPhone: string;
  senderEmail: string;
  returnStoreId: string;
  returnStore: string;
  returnStoreAddr: string;
  PrintType: string;
  ParentId: string;
  EshopId: string;
}

// 產生 flexMessage 用
export interface receiver {
  receiverName: string;
  receiverPhone: string;
  receiverEmail: string;
  sendStoreId: string;
  sendStore: string;
  sendStoreAddr: string;
}

export interface qrcodeData {
  name: string;
  phone: string;
  shop: string;
  time: string;
  url: string;
}

export interface receiverData {
  "收件人": string;
  "電話": string;
  "門市": string;
  "日期": string;
}