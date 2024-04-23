import './style.css';
import { loadPage } from './loadPage';
import { createHomePage } from './createHomePage';
import { createMenuPage } from './createMenuPage';
import { createAboutPage } from './createAboutPage';
loadPage();

const home=document.querySelector(".Home");
const menu=document.querySelector(".Menu");
const about=document.querySelector(".About");
about.addEventListener("click",createAboutPage);
menu.addEventListener("click",createMenuPage);
home.addEventListener("click",createHomePage);