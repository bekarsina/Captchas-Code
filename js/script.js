var $ = document;

var pass = $.querySelector(".Pass");
var generate = $.querySelector(".generate");

function capchaPass() {
  var RandomChars =
    "qwertyuiopasdfghjklzxcvbnm123456789!@#$%^&*()_+=-/{}[]></|";
  var RandomText = "";
  for (let i = 0; i < 8; i++) {
    RandomText += RandomChars.charAt(Math.floor(Math.random() * 60));
  }
  if (RandomText.length == 8) {
    pass.innerHTML = RandomText;
  } else {
    return Error
  }
  
  console.log(RandomText.length);
  // pass.innerHTML = RandomText;
}
