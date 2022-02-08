var $ = document;

var pass = $.querySelector(".Pass");
var generate = $.querySelector(".generate");
var passLength = $.querySelector(".pass-length");


function capchaPass() {
  var length = Number(passLength.value);
  var RandomChars =
    "qwertyuiopasdfghjklzxcvbnm123456789!@#$%^&*()_+=-/{}[]></|";
  var RandomText = "";
  for (let i = 0; i < length; i++) {
    RandomText += RandomChars.charAt(Math.floor(Math.random() * 60));
  }
  if (RandomText.length == length) {
    pass.innerHTML = RandomText;
  } else {
    return Error;
  }

}
