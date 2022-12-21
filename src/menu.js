import {makeDiv, makePara, makeCardHeading, makeCardSubHeading} from './makeElement';

class menuItem{
    constructor(title, description, price){
        this.title = title
        this.description = description;
        this.price = price;
    }

    makeCard(){
        const menuCard = makeDiv('card');

        const menuTitle = document.createElement('h3');
        menuTitle.textContent = this.title;
    
        const menuDescription = makePara('menu-description');
        menuDescription.textContent = this.description;
    
        const menuPrice = makePara('price');
        menuPrice.textContent = this.price;
    
        menuCard.appendChild(menuTitle);
        menuCard.appendChild(menuDescription);
        menuCard.appendChild(menuPrice);
    
        return menuCard;
    }
}

export default function menuCardComponent(){

    const headingContainer = makeCardHeading("Menu");


    const beveragesHeading = makeCardSubHeading("Bevs");   

    const jellyMargherita = new menuItem(
        "Jelly Margherita",

        `A cold, complex drink 
        made with the highest quality jelly 
        and a bit of lime to start your 
        night off right!`,

        "Price: $8"
    );

    const ginTonic = new menuItem(
        "Gin & Tonic",

        `A tantalizing, almost exotic, drink that is
        a deep sea twist on a classic. 
        Infused with the flavors of several kinds of 
        jelly fish jelly.`,

        "Price: $12"
    );


    const sidesHeading = makeCardSubHeading("Sides");

    const toastJelly = new menuItem(
        "Toast & Jelly",

        `A slice of toast, your choice of bread, 
        and our homemade jellyfish jelly.`,

        "Price: $2"
    );

    const poutine = new menuItem(
        "Poutine",

        `The crispiest fries you've ever had
        the pleasure of eating, topped with our
        gravy, made fresh in house everyday.`,

        "Price: $6"
    );


    const mainDishHeading = makeCardSubHeading("Mains");

    const krabbyPatty = new menuItem(
        "Krabby Patty",

        `You know what this is.`,

        "Price: $12"
    );

    const jellyBurger = new menuItem(
        "Jelly Burger",

        `Our ocean famous Krabby Patty with
        jellyfish jelly. (The chef's favourite!)`,

        "Price: $15"
    );



    const mainCard = makeDiv('main-card');
    mainCard.appendChild(headingContainer);

    mainCard.appendChild(beveragesHeading);
    mainCard.appendChild(jellyMargherita.makeCard());
    mainCard.appendChild(ginTonic.makeCard());

    mainCard.appendChild(sidesHeading);
    mainCard.appendChild(toastJelly.makeCard());
    mainCard.appendChild(poutine.makeCard());

    mainCard.appendChild(mainDishHeading);
    mainCard.appendChild(krabbyPatty.makeCard());
    mainCard.appendChild(jellyBurger.makeCard());
    return mainCard;
}
