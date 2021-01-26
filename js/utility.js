import {BinaryToDecimal,BinaryToOctal,DecimalToBinary_Octal_hexaDecimal,hexadecimalToBinary} from './convert.js'

//Dom Manipulation

let btnConvert = document.getElementById("convertor");
let inputBox = document.querySelectorAll("input");


function clickHandler() {
  for (let i = 0; i < inputBox.length; i++) {
    let textBoxValue = 0;
    textBoxValue = document.getElementById(inputBox[i].id).value;

    if (i == 0 && textBoxValue) {
      //Binary to All
      let toAll = 1,
        base,
        returnValue = 0;
      while (toAll <= 3) {
        switch (toAll) {
          case 1:
            base = 2;
            returnValue = BinaryToDecimal(textBoxValue, base);
            document.getElementById("decimalInput").value = returnValue;
            break;
          case 2:
            base = 2;
            returnValue = BinaryToOctal(textBoxValue, base);
            document.getElementById("octalInput").value = returnValue;
            break;
          case 3:
            base = 2;
            returnValue = BinaryToDecimal(textBoxValue, base);
            base = 16;
            returnValue = DecimalToBinary_Octal_hexaDecimal(returnValue, base);
            document.getElementById("hexaDecimalInput").value = returnValue;

            break;
          default:
        }
        toAll = toAll + 1;
      }
    } else if (i == 1 && textBoxValue) {
      let toAll = 1,
        base,
        returnValue = 0;
      while (toAll <= 3) {
        //Decimal to All
        switch (toAll) {
          case 1:
            base = 2;
            returnValue = DecimalToBinary_Octal_hexaDecimal(textBoxValue, base);
            document.getElementById("binaryInput").value = returnValue;
            break;
          case 2:
            base = 8;
            returnValue = DecimalToBinary_Octal_hexaDecimal(textBoxValue, base);
            document.getElementById("octalInput").value = returnValue;
            break;
          case 3:
            base = 16;
            returnValue = DecimalToBinary_Octal_hexaDecimal(textBoxValue, base);
            document.getElementById("hexaDecimalInput").value = returnValue;
            break;
          default:
        }
        toAll = toAll + 1;
      }
    } else if (i == 2 && textBoxValue) {
      //Octal to All
      let toAll = 1,
        base,
        returnValue = 0;
      while (toAll <= 3) {
        switch (toAll) {
          case 1:
            base = 8;
            returnValue = BinaryToDecimal(textBoxValue, base);
            base = 2;
            returnValue = DecimalToBinary_Octal_hexaDecimal(returnValue, base);
            document.getElementById("binaryInput").value = returnValue;
            break;
          case 2:
            base = 8;
            returnValue = BinaryToDecimal(textBoxValue, base);
            document.getElementById("decimalInput").value = returnValue;
            break;
          case 3:
            base = 8;
            returnValue = BinaryToDecimal(textBoxValue, base);
            base = 16;
            returnValue = DecimalToBinary_Octal_hexaDecimal(returnValue, base);
            document.getElementById("hexaDecimalInput").value = returnValue;
            break;
          default:
        }
        toAll = toAll + 1;
      }
    } else if (i == 3 && textBoxValue) {
      //Octal to All
      let toAll = 1,
        base,
        returnValue = 0;
      while (toAll <= 3) {
        switch (toAll) {
          case 1:
            base = 16;
            returnValue = hexadecimalToBinary(textBoxValue, base);
           
            base = 2;
            returnValue = DecimalToBinary_Octal_hexaDecimal(returnValue, base);
            document.getElementById("binaryInput").value = returnValue;
            break;
          case 2:
            base = 16;
            returnValue = hexadecimalToBinary(textBoxValue, base);
            document.getElementById("decimalInput").value = returnValue;
            break;
          case 3:
            base = 16;
            returnValue = hexadecimalToBinary(textBoxValue, base);
            base = 8;
            returnValue = DecimalToBinary_Octal_hexaDecimal(returnValue, base);
            document.getElementById("octalInput").value = returnValue;
            break;
          default:
        }
        toAll = toAll + 1;
      }
    }
  }
}
btnConvert.addEventListener("click", clickHandler);
