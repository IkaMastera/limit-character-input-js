var myText = document.getElementById("my-text");
var result = document.getElementById("result");
var winlosetext = document.getElementById("winlose-text");
var limit = 60;

result.textContent = 0 + "/" + limit;

myText.addEventListener("input", function () {
  var textLength = myText.value.length;
  result.textContent = textLength + "/" + limit;

  if (textLength > limit) {
    myText.style.borderColor = "#ff2851";
    result.style.color = "#ff2851";
    winlosetext.textContent = "Too many Words";
  } else {
    myText.style.borderColor = "#b2b2b2";
    result.style.color = "#737373";
    winlosetext.textContent = "";
  }
});
