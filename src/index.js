import headerComp from "./header.js";
import homeCardComponent from "./home.js";
import menuCardComponent from "./menu.js";
import contactCardComponent from "./contact.js";
import './style.css'; 

const content = document.querySelector('#content');

//Each parameter creates a button with the text content you enter
content.appendChild(headerComp("Home", "Menu", "Contact"));

//default page loaded
content.appendChild(homeCardComponent());

//button event listeners
const buttons = document.querySelectorAll('.page-selector');

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        const mainCard = document.querySelector(".main-card");
        mainCard.remove();

        switch(button.getAttribute('id')){
            case "Home": 
                content.appendChild(homeCardComponent());
                break;
            case "Menu":
                content.appendChild(menuCardComponent());
                break;  
            case "Contact":
                content.appendChild(contactCardComponent());
                break;
        }
    })
})
