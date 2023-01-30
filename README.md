![](https://i.imgur.com/pLdYp7p.jpg)

# 711 店到店 LINE 機器人

主要用來解決寄送 711 店到店的繁瑣步驟，透過機器人能更快產生 QR CODE，直接拿到超商掃完後就能寄件。

![](https://i.imgur.com/Fp08Xr0.gif)

早期曾透過 Python + selenium，製作簡易的 GUI 介面，不過只能在電腦上使用，略為不便。[詳細請點我](https://github.com/westleft/711-QRCode-download)。

## 部屬 LINE BOT

<img src="https://cdn-icons-png.flaticon.com/512/6939/6939131.png" width="18"> 目前版本較為粗糙，無防呆等細節功能


部屬前記得修改以下檔案，並刪除 `.example` 字眼：

* `.env` 中的 `CHANNEL_ID`、`CHANNEL_SECRET`、`CHANNEL_ACCESS_TOKEN`。
* `./src/data/receiver.json` 中的收件人。
* `./src/data/sender.json` 中的寄件人。

收件人可填多個，範例如下：

```json
{
  "receiverName": "巨石強森",
  "receiverPhone": "0912345678",
  "receiverEmail": "ffgjfgj456@yahoo.com.tw",
  "sendStoreId": "174109",
  "sendStore": "堡勤門市",
  "sendStoreAddr": "屏東縣屏東市新生里復興南路一段370號1樓"
}
 ```
查詢 711 店號及地址可至 [門市查詢](https://emap.pcsc.com.tw/)。
 
