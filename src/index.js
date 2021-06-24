import "./scss/main.scss";
import template from "./templates/menu.hbs";
import data from "./menu.json";
import { getElementById } from "domutils";
import { classBody } from "babel-types";
// import { setLocalStorage, getLocalStorage } from "./utils/utils";
window.onload = () => {
   const menu = document.querySelector(".js-menu");
      menu.innerHTML = template(data);
   
   const page = document.querySelector("body");
   console.log(page);
   const toggle = document.getElementById("theme-switch-toggle");
   toggle.addEventListener("change", switchTheme);
   localStorage.getItem('theme');
   page.classList.add("light-theme");
   function switchTheme(event) {
      if (page.classList.contains("light-theme") === true) {
         page.classList.replace("light-theme", "dark-theme");
         localStorage.setItem('theme', 'dark');
      }
      else {
         page.classList.replace("dark-theme", "light-theme");
         localStorage.setItem('theme', 'light');
      }
   } 
 };