function checkNumber(value: string | number): string {
  let decimal = false;
  value = value.toString();
  value = value.replace(/ |,|บาท|฿/gi, "");
  for (let i = 0; i < value.length; i++) {
    if (value[i] === ".") {
      decimal = true;
    }
  }
  if (decimal === false) {
    value = value + ".00";
  }
  return value;
}

export function arabicNumberToText(value: string): string {
  const arabic = checkNumber(value);
  const units: string[] = [
    "ศูนย์",
    "หนึ่ง",
    "สอง",
    "สาม",
    "สี่",
    "ห้า",
    "หก",
    "เจ็ด",
    "แปด",
    "เก้า",
    "สิบ",
  ];
  const digits = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];
  let bahtText = "";
  if (isNaN(+arabic)) {
    return "ข้อมูลนำเข้าไม่ถูกต้อง";
  } else {
    if (+arabic - 0 > 9999999.9999) {
      return "ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้";
    } else {
      const arabicNumbers = (arabic as string).split(".");
      if (arabicNumbers[1].length > 0) {
        arabicNumbers[1] = arabicNumbers[1].substring(0, 2);
      }
      const numberLen = arabicNumbers[0].length - 0;
      for (let i = 0; i < numberLen; i++) {
        const tmp = Number(arabicNumbers[0].substring(i, i + 1)) - 0;
        if (tmp != 0) {
          if (i === numberLen - 1 && tmp === 1) {
            bahtText += "เอ็ด";
          } else if (i === numberLen - 2 && tmp === 2) {
            bahtText += "ยี่";
          } else if (i === numberLen - 2 && tmp === 1) {
            bahtText += "";
          } else {
            bahtText += units[tmp];
          }
          bahtText += digits[numberLen - i - 1];
        }
      }
      bahtText += "บาท";
      if (arabicNumbers[1] === "0" || arabicNumbers[1] === "00") {
        bahtText += "ถ้วน";
      } else {
        const decimalLen = arabicNumbers[1].length - 0;
        for (let i = 0; i < decimalLen; i++) {
          const tmp = Number(arabicNumbers[1].substring(i, i + 1)) - 0;
          if (tmp != 0) {
            if (i === decimalLen - 1 && tmp === 1) {
              bahtText += "เอ็ด";
            } else if (i === decimalLen - 2 && tmp === 2) {
              bahtText += "ยี่";
            } else if (i === decimalLen - 2 && tmp === 1) {
              bahtText += "";
            } else {
              bahtText += units[tmp];
            }
            bahtText += digits[decimalLen - i - 1];
          }
        }
        bahtText += "สตางค์";
      }
      return bahtText;
    }
  }
}
