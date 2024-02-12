// TextAreas
const encryptText = document.querySelector(".user-text");
const copyText = document.querySelector(".inputCopy");

// Result Button
const textFound = document.querySelector(".text-found");
const notFound = document.querySelector(".not-found");

let message;

function encrypt() {
  if (encryptText.value) {
    message = encryptText.value
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");

    copyText.value = message;
    encryptText.value = "";
    textFound.classList.remove("display-none");
    notFound.classList.add("display-none");
  } else {
    textFound.classList.add("display-none");
    notFound.classList.remove("display-none");
  }
}

function decrypt() {
  if (encryptText.value) {
    message = encryptText.value
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    copyText.value = message;
    encryptText.value = "";
    textFound.classList.remove("display-none");
    notFound.classList.add("display-none");
  } else {
    textFound.classList.add("display-none");
    notFound.classList.remove("display-none");
  }
}

function copy() {
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}
