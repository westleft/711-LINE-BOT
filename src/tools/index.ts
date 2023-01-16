// 深拷貝
export function deepCopy(obj: Object) {
  return JSON.parse(JSON.stringify(obj));
};

// 隱藏手機號碼部分數字
export function hiddenPhoneNumber(phone: string) {
  const reg = new RegExp("(?<=.{4}).{1}(?=.{3})", "g");
  return phone.replace(reg, "*");
};
