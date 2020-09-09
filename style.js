var a = "";
function func() {
  if (a == "") {
    document.getElementById("content").setAttribute("style", "top:0%;");
    document.getElementById("button").setAttribute("style", "top:0%;");
    a = "1";
  } else {
    document.getElementById("content").setAttribute("style", "top:-30%;");
    document.getElementById("button").setAttribute("style", "top:-70%;");
    a = "";
  }
}
https://codepen.io/muhammadfarhan999/pen/ZEQrGme