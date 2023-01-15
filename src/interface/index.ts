export interface flexTemplate {
  type: string;
  contents: object;
}

export interface reciver {
  orderAmount: string;
  senderName?: string;
  senderPhone?: string;
  senderEmail?: string;
  returnStoreId: string;
  returnStore: string;
  returnStoreAddr: string;
  receiverName: string;
  receiverPhone: string;
  receiverEmail: string;
  sendStoreId: string;
  sendStore: string;
  sendStoreAddr: string;
  PrintType: string;
  ParentId: string;
  EshopId: string;
}

export interface flexButtonTemplate {
  type: string;
  text: string;
  color: string;
  align: string;
  size: string;
  gravity: string;
  margin?: string;
}
