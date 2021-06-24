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
   if (localStorage.getItem('theme') === 'light') {
      page.classList.add("light-theme");
      page.classList.remove("dark-theme");
   }
      else if (localStorage.getItem('theme') === 'dark') {
      page.classList.add("dark-theme");
      page.classList.remove("light-theme");
      }

   function switchTheme(event) {
      if (page.classList.contains("light-theme") === false && page.classList.contains("dark-theme") === false) {
         page.classList.add("dark-theme");
         localStorage.setItem('theme', 'dark');
      }
      else if (page.classList.contains("light-theme") === true) {
         page.classList.replace("light-theme", "dark-theme");
         localStorage.setItem('theme', 'dark');
      }
      else{
         page.classList.replace("dark-theme", "light-theme");
         localStorage.setItem('theme', 'light');
      }
   } 
 };