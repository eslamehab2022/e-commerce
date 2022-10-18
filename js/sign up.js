let user_name = document.querySelector("#user_name");
let user_email = document.querySelector("#user_email");
let user_password = document.querySelector("#user_password");
let user_confirm = document.querySelector("#user_confirm");
let sign_up = document.querySelector("#sign_up");

// function save Date Base // localStorage//

let container;
if (localStorage.getItem("cont") == null) {
  container = [];
} else {
  container = JSON.parse(localStorage.getItem("cont"));
}

//event signup date
sign_up.addEventListener("click", function (e) {
  e.preventDefault();
  check();
  push();
  remove_value();

  //display_person();
});

function check() {
  if (
    user_name.value == "" ||
    user_email.value == "" ||
    user_password.value != user_confirm.value ||
    user_password.value == ""
  ) {
    document.getElementById("alerts").style.display = "block";
    localStorage.removeItem();
  } else {
    document.getElementById("alerts").style.display = "none";
    loctions();
  }
}

// push value in array
function push() {
  let pro_cont = {
    name: user_name.value,
    email: user_email.value,
    pasword: user_password.value,
    confirm: user_confirm.value,
  };
  container.push(pro_cont);
  //save date in localstorage
  localStorage.setItem("cont", JSON.stringify(container));
}

// remove value in input
function remove_value() {
  let inputs = document.getElementsByClassName("form-control");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function loctions() {
  window.location = "sign in.html";
}
