const encryptText = document.querySelector(".user-text");
const copyText = document.querySelector(".inputCopy");
let message;

function encrypt() {
  message = encryptText.value
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")
    .replaceAll("ai", "aimes");
  console.log(message);

  copyText.value = message;
}

function decrypt() {
  message = encryptText.value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
    .replaceAll("aimes", "ai");
  console.log(message);

  copyText.value = message;
}

function copy() {
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}
