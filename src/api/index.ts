import axios from "axios";

const FormData = require('form-data');

const myShipRequest = axios.create({
  baseURL: "https://myship2.7-11.com.tw/C2C/"
})

// 產生訂單
export const postCreateOrder = (data: typeof FormData) => myShipRequest.post("CreateOrder", data);
