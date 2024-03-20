//Initial References
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//Function to convert decimal to binary
function decimalToBinary(decimal) {
  // Split the decimal value into integer and fractional parts
  const [intPart, fracPart] = decimal.split(".");
  const intBinary = parseInt(intPart, 10).toString(2);
  const fracBinary = fracPart
    ? fracPart
        .split("")
        .map((digit) => parseInt(digit, 10).toString(2).padStart(4, "0"))
        .join("")
    : "";
  return intBinary + (fracBinary ? "." + fracBinary : "");
}

// Function to convert binary to decimal
function binaryToDecimal(binary) {
  // Split the binary value into integer and fractional parts
  const [intPart, fracPart] = binary.split(".");
  const intDecimal = parseInt(intPart, 2);
  const fracDecimal = fracPart
    ? parseInt(fracPart, 2) / Math.pow(2, fracPart.length)
    : 0;
  return intDecimal + fracDecimal;
}

decInp.addEventListener("input", () => {
  binInp.value = decimalToBinary(decInp.value);
});

binInp.addEventListener("input", () => {
  decInp.value = binaryToDecimal(binInp.value);
});
