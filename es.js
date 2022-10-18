let links = document.querySelectorAll(".links");
let users = document.querySelectorAll(".colaction");
let user = document.getElementById("nav-link");
let logout = document.getElementById("logout");

// check user in localsrorage
let checks = (container = JSON.parse(localStorage.getItem("cont")));
if (checks) {
  removes();
  show();
  description();
}
//removes
function removes() {
  for (i = 0; i < links.length; i++) {
    links[i].remove();
  }
}
//show
function show() {
  for (i = 0; i < users.length; i++) {
    users[i].style.display = "block";
  }

  // display shop cart
  document.getElementById("shopping_icon").style.display = "block";
}

//loop vailue input in localstorage
function description() {
  for (var i = 0; i < checks.length; i++) {
    var names = checks[i].name;
  }
  user.innerHTML =
    `<i class="fa-solid fa-circle-user d-inline me-2 "></i>` + names;
}
// log out event
logout.addEventListener("click", function () {
  Back();
});
// log out function

function Back() {
  localStorage.clear();
  window.location = "index.html";
}
// show prodact cart

function show_proudact_cart() {
  let csr = "";
  //loop container iteam
  for (i = 0; i < proudacts.length; i++) {
    csr += `<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 pb-5 ">
<div class="all_product"  >
<div class="img-product ">
  <img class="img-fluid" src="${proudacts[i].proudact_imgurl}"alt="product" onclick=" Detials_Proudacts(${proudacts[i].id})"  >
</div>
<div class="descraption-product d-inline">
  <h6>${proudacts[i].titel}</h6>
   <span>Delivered by delegat</span>
  <p>${proudacts[i].price}</p>
</div>
<div class="shop">
<i class="fa-solid fa-square-plus d-inline" id="plus_cart " onclick="add_Cart(${proudacts[i].id})"></i>
<i class="fa-solid fa-heart heartaa" id="her" onclick="Heart_proudacts(${i})" ></i>

</div>

</div>
</div>
`;
  }
  document.getElementById("rowdate").innerHTML = csr;
}
// call to function show_proudact

show_proudact_cart();

/******************************************************************************/
//itaems cart open

// add to cart list
let added = document.getElementById("added");
//check localStorage empty or NO
let balance;
if (localStorage.getItem("fav") == null) {
  balance = [];
} else {
  balance = JSON.parse(localStorage.getItem("fav"));

  draw();
}

function draw() {
  if (balance) {
    balance.map((iteam) => {
      test.innerHTML += `    

    <div class="col-lg-12 ">
    <div class="fav_proudacts" id="fav_pro">
  
      <div class="fav_img d-inline "> 
      <img class="" src="${iteam.proudact_imgurl}" alt="">
      </div>
      <div class="fav_desc d-inline  ">
        <h6 class="notifcation_iteam">${iteam.titel}</h6>
        <p class="d-inline">${iteam.price}</p>
        <i class="fa-solid fa-trash d-inline ms-3 swal" id="trash" onclick="delet_fav(${iteam.id})"></i>
        <div class="quntatiy  "> 
        <p class="qun">${iteam.qut}</p>
        </div>
    </div>

    </div>
  </div>
  `;
    });
  }

  //display notifcation_iteam length
  let notifcation_iteam = document.getElementsByClassName("notifcation_iteam");
  added.innerHTML = notifcation_iteam.length;

  if (notifcation_iteam.length == 0) {
    added.style.display = "none";
  } else {
    added.style.display = "block";
  }
}

/************************************************************* */

function add_Cart(id) {
  let process = proudacts.find((or) => or.id === id);
  let se_process = balance.find((i) => i.id === process.id);
  //Dont allwo add proudacts shop

  if (checks) {
    if (se_process) {
      balance = balance.map((p) => {
        if (p.id === process.id) p.qut += 1;
        return p;
      });
    } else {
      balance.push(process);
    }

    let test = document.getElementById("test");
    test.innerHTML = "";
    balance.map((pac) => {
      test.innerHTML += `    
    <div class="col-lg-12 ">
    <div class="fav_proudacts" id="fav_pro">
      <div class="fav_img d-inline "> 
      <img class="" src="${pac.proudact_imgurl}" alt=""></div>
      <div class="fav_desc d-inline  ">
        <h6 class="notifcation_iteam">${pac.titel}</h6>
        <p class="d-inline">${pac.price}</p>
        <i class="fa-solid fa-trash d-inline ms-3" id="trash" onclick="delet_fav(${pac.id})"></i>
        <div class="quntatiy  "> 
        <p class="qun">${pac.qut}</p>
        </div>
    </div>
  </div>
  `;
    });
    //let uniq_proudct=  gets(balance,"id");
    //push iteams
    //  balance = [...balance, choasse];
    localStorage.setItem("fav", JSON.stringify(balance));
    //add notifcation_iteam length
    added.style.display = "block";
    let notifcation_iteam =
      document.getElementsByClassName("notifcation_iteam");
    added.innerHTML = notifcation_iteam.length;
  } else {
    window.location = "sign up.html";
  }
}

//Dont reabet add proudact
function gets(arr, filter_id) {
  let unqs = arr
    .map((itess) => itess[filter_id])

    .map((itess, idx, finals) => finals.indexOf(itess) === idx && idx)
    .map((itess) => arr[itess]);

  return unqs;
}
//itaems cart open
var iteam_carts = document.getElementById("iteam_carts");
var fav = document.getElementById("fav");

iteam_carts.addEventListener("click", function () {
  if (test.innerHTML != "") {
    fav.style.right = 0;
  } else {
    fav.style.right = "-564px";
  }
});
//itaems cart  close

let close_fav = document.getElementById("close_fav");
close_fav.addEventListener("click", function () {
  fav.style.right = "-564px";
});

//event search proudacts

let search_bar = document.getElementById("search_bar");

search_bar.addEventListener("keyup", function () {
  searchs(search_bar.value);
});

function searchs(term) {
  let serc = "";
  //search proudacts
  for (i = 0; i < proudacts.length; i++) {
    if (proudacts[i].titel.toLowerCase().includes(term.toLowerCase())) {
      serc += `<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 pb-5">
<div class="all_product">
<div class="img-product ">
  <img class="img-fluid" src="${proudacts[i].proudact_imgurl}"alt="product">
</div>
<div class="descraption-product d-inline">
  <h6>${proudacts[i].titel}</h6>
   <span>Delivered by delegat</span>
  <p>${proudacts[i].price}</p>
</div>
<div class="shop"><i class="fa-solid fa-square-plus" id="plus_cart" onclick="add_Cart(${proudacts[i].id})"></i>
<i class="fa-solid fa-heart heartaa" id="her" onclick="Heart_proudacts(${i})" ></i>

</div>

</div>
</div>
`;
    }
  }

  document.getElementById("rowdate").innerHTML = serc;
}
//delet fav_proudact
function delet_fav(id) {
  swal({
    title: "Are you sure?",
    text: "Are you sure you don't want the product in your cart !",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      if (balance) {
        let tell = balance.filter((win) => win.id !== id);
        console.log(tell);
        localStorage.setItem("fav", JSON.stringify(tell));
        setInterval(function () {
          window.location.reload();
        }, 900);
      }
      swal(" Your product has been removed from your cart !", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}

// function heart proudacts
function Heart_proudacts(e) {
  event.target.classList.toggle("list");
}
function Detials_Proudacts(id) {
  localStorage.setItem("prodactId", id);

  setTimeout(() => {
    window.location = "detials.html";
  }, 400);
}
