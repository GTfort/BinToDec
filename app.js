//Initial References
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//Function to convert decimal to binary
function decimalToBinary(decimal) {
  // Split the decimal value into integer and fractional parts
  let [intPart, fracPart] = decimal.split(".");
  let intBinary = parseInt(intPart).toString(2); // Convert integer part to binary
  let fracBinary = "";

  // Convert fractional part to binary
  if (fracPart) {
    let fracValue = parseFloat("0." + fracPart);
    while (fracValue > 0) {
      fracValue *= 2;
      let bit = Math.floor(fracValue);
      fracBinary += bit;
      fracValue -= bit;
    }
  }

  // Combine the binary parts
  return intBinary + (fracBinary ? "." + fracBinary : "");
}

// Function to convert binary to decimal
function binaryToDecimal(binary) {
  // Split the binary value into integer and fractional parts
  let [intPart, fracPart] = binary.split(".");
  let intDecimal = parseInt(intPart, 2); // Convert integer part to decimal
  let fracDecimal = 0;

  // Convert fractional part to decimal
  if (fracPart) {
    let fracValue = parseFloat("0." + fracPart);
    let base = 1 / Math.pow(2, fracPart.length);
    fracDecimal = fracValue * base;
  }

  // Combine the decimal parts
  return intDecimal + fracDecimal;
}

decInp.addEventListener("input", () => {
  let decValue = decInp.value;
  binInp.value = decimalToBinary(decValue);
});

binInp.addEventListener("input", () => {
  let binValue = binInp.value;
  decInp.value = binaryToDecimal(binValue);
});
