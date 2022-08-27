function convertToRoman(num) {
  let romanNumbers = "";

  for (;num > 0;) {
    if (num < 4) {
      romanNumbers += "I";
      num -= 1;
    } else if (num === 4) {
      romanNumbers += "IV";
      num -= 4;
    } else if (num >= 5 && num < 9) {
      romanNumbers += "V";
      num -= 5;
    } else if (num === 9) {
      romanNumbers += "IX";
      num -= 9;
    } else if (num >= 10 && num < 40) {
      romanNumbers += "X";
      num -= 10;
    } else if (num >= 40 && num < 50) {
      romanNumbers += "XL";
      num -= 40;
    } else if (num >= 50 && num < 90) {
      romanNumbers += "L";
      num -= 50;
    } else if (num >= 90 && num < 100) {
      romanNumbers += "XC";
      num -= 90;
    } else if (num >= 100 && num < 400) {
      romanNumbers += "C";
      num -= 100;
    } else if (num >= 400 && num < 500) {
      romanNumbers += "CD";
      num -= 400;
    } else if (num >= 500 && num < 900) {
      romanNumbers += "D";
      num -= 500;
    } else if (num >= 900 && num < 1000) {
      romanNumbers += "CM";
      num -= 900;
    } else if (num >= 1000) {
      romanNumbers += "M";
      num -= 1000;
    }
  }

 return romanNumbers;
}

console.log(convertToRoman(3));