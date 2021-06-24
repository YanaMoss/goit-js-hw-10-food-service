import "./scss/main.scss";
import template from "./templates/menu.hbs";
import data from "./menu.json";
// import { setLocalStorage, getLocalStorage } from "./utils/utils";
window.onload = () => {
   const menu = document.querySelector(".js-menu");
   console.log(menu);
   const getTemplate = template(data)
   console.log(getTemplate);
   menu.innerHTML = getTemplate;
   
};