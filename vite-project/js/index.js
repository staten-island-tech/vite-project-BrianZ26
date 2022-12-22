import { menu } from "./array";
import { DOM } from "./DOM";

function input() {
  menu.forEach((menu) =>
    DOM.display.insertAdjacentHTML(
      "beforeend",
      `<div class="input">   
      <img src="${menu.url}" class="img"></img>
        <h2>${menu.name}</h2> 
        <h3>$${menu.cost}</h3>
        </div>`
    )
  );
}
input();
document.querySelector(".all").addEventListener("click", function () {
  DOM.display.innerHTML = "";
  input();
});
document.querySelector(".meat").addEventListener("click", function () {
  console.log("a");
  DOM.display.innerHTML = "";
  menu
    .filter((food) => food.meat === true)
    .forEach((menu) =>
      DOM.display.insertAdjacentHTML(
        "beforeend",
        `<div class="input">   
    <img src="${menu.url}" class="img"></img>
      <h2>${menu.name}</h2> 
      <h3>$${menu.cost}</h3>
      </div>`
      )
    );
});
document.querySelector(".side").addEventListener("click", function () {
  console.log("a");
  DOM.display.innerHTML = "";
  menu
    .filter((food) => food.dish === "side")
    .forEach((menu) =>
      DOM.display.insertAdjacentHTML(
        "beforeend",
        `<div class="input">   
    <img src="${menu.url}" class="img"></img>
      <h2>${menu.name}</h2> 
      <h3>$${menu.cost}</h3>
      </div>`
      )
    );
});
document.querySelector(".drink").addEventListener("click", function () {
  console.log("a");
  DOM.display.innerHTML = "";
  menu
    .filter((food) => food.dish === "drink")
    .forEach((menu) =>
      DOM.display.insertAdjacentHTML(
        "beforeend",
        `<div class="input">   
    <img src="${menu.url}" class="img"></img>
      <h2>${menu.name}</h2> 
      <h3>$${menu.cost}</h3>
      </div>`
      )
    );
});
document.querySelector(".main").addEventListener("click", function () {
  DOM.display.innerHTML = "";
  menu
    .filter((food) => food.dish === "main")
    .forEach((menu) =>
      DOM.display.insertAdjacentHTML(
        "beforeend",
        `<div class="input">   
    <img src="${menu.url}" class="img"></img>
      <h2>${menu.name}</h2> 
      <h3>$${menu.cost}</h3>
      </div>`
      )
    );
});
DOM.button.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
