import { menu } from "./array";
import { DOM } from "./DOM";

function input() {
  menu.forEach((menu) =>
    DOM.display.insertAdjacentHTML(
      "beforeend",
      `<div class="input">
        <h2>${menu.name}</h2> 
        <h3>${menu.cost}</h3>
        <h3>${menu.meat}</h3>
        <h3>${menu.url}</h3> 
        </div>`
    )
  );
}

input();

console.log(menu);
