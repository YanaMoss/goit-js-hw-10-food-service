import "./scss/main.scss";
import template from "./templates/menu.hbs";
import data from "./menu.json";
window.onload = () => {
   const menu = document.querySelector(".js-menu");
   menu.innerHTML = template(data);
   
   const page = document.querySelector("body");
   const toggle = document.getElementById("theme-switch-toggle");

   toggle.addEventListener("change", switchTheme);
   
   function switchTheme(event) {
      if (!page.classList.contains("light-theme") && !page.classList.contains("dark-theme")) {
         page.classList.add("dark-theme");
         localStorage.setItem('theme', 'dark');
      }
      else if (page.classList.contains("light-theme")) {
         page.classList.replace("light-theme", "dark-theme");
         localStorage.setItem('theme', 'dark');
      }
      else {
         page.classList.replace("dark-theme", "light-theme");
         localStorage.setItem('theme', 'light');
      };
   };

    if (localStorage.getItem('theme') === 'light') {
      page.classList.add("light-theme");
      page.classList.remove("dark-theme");
   }
   else if (localStorage.getItem('theme') === 'dark') {
      toggle.setAttribute('checked', 'true')
      page.classList.add("dark-theme");
      page.classList.remove("light-theme");
   };
};