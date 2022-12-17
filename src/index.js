import headerComp from "./header.js";
import homeCardComponent from "./home.js";
import './style.css'; 

const content = document.querySelector('#content');

//Each parameter creates a button with the text content you enter
content.appendChild(headerComp("Home", "Menu", "Contact"));
content.appendChild(homeCardComponent());
