let proudacts_des = JSON.parse(localStorage.getItem("prodacts_containeer"));
let Ids = localStorage.getItem("prodactId");
let Doms = document.getElementById("details_Dom");

let proudact_details = proudacts_des.find((iteams) => iteams.id == Ids);
console.log(proudact_details);

Doms.innerHTML = `
    

<div class="col-lg-6  col-md-6 col-sm-12 ">
<div class="colactions ">
<div class="Imageproudacts ">
  <img src="${proudact_details.proudact_imgurl}" class=" img-fluid w-75 " alt="proudacts">
</div>
</div>
</div>
<div class="col-lg-6  col-md-6 col-sm-12 ">
<div class="contant  ">
  <h2>${proudact_details.titel}</h2>
  <p>Delivered by delegat</p>
  <h4>${proudact_details.price}</h4>
  <p>This product conforms to international specifications and the site has all the rights of marketing, selling and publishing, and otherwise it exposes itself to legal issue

  </p>
  <select name="proudacts" >
    <option value="red">red</option>
    <option value="black">black</option>
    <option value="Silver">Silver</option>
    <option value="Gold">Gold</option>


  </select>
</div>

</div>




`;
