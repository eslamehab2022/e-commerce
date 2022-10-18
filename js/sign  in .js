let log_in = document.getElementById("log in");
let log_name = document.getElementById("log in_name");
let log_password = document.getElementById("log in_password");
// log in
let data = (container = JSON.parse(localStorage.getItem("cont")));
if (data ) {
  show_value();
}
log_in.addEventListener("click", function (e) {
  e.preventDefault();
  if (data) {
    setInterval(function(){
      locations();
    },400)
  } else {
    window.location = "sign up.html";
    
  }
});
// function show value in input
function show_value() {
  for (i = 0; i < data.length; i++) {
    var ns = data[i].name;
    var pas = data[i].pasword;
    log_name.value = ns;
    log_password.value = pas;
  }
}
// home page
function locations() {
  window.location = "index.html";
}



