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
input();
