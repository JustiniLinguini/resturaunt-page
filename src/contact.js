import {makeDiv, makePara, makeCardHeading} from './makeElement';

class contact{
    constructor(name, title, phone, email){
        this.name = name
        this.title = title;
        this.phone = phone;
        this.email = email;
    }

    makeCard(){
        const contactCard = makeDiv('card');

        const contactName = document.createElement('h3');
        contactName.textContent = this.name;
    
        const contactTitle = makePara('job-title');
        contactTitle.textContent = this.title;
    
        const contactPhone = makePara('phone-number');
        contactPhone.textContent = this.phone;

        const contactEmail = makePara('email');
        contactEmail.textContent = this.email;
    
        contactCard.appendChild(contactName);
        contactCard.appendChild(contactTitle);
        contactCard.appendChild(contactPhone);
        contactCard.appendChild(contactEmail);
    
        return contactCard;
    }
}


export default function contactCardComponent(){

    const headingContainer = makeCardHeading("Contact Us");

    const mrKrabs = new contact(
        "Mr. Krabs",

        "Owner",

        "555-555-5554",

        "mrKrabs1337@gmail.com"
    );

    const spongeBob = new contact(
        "SpongeBob Squarepants",

        "Chef",

        "555-555-5555",

        "spongeBoySponge@gmail.com"
    );

    const Squidward = new contact(
        "Squidward Tentacles",

        "Waiter",

        "555-555-5556",

        "tentacleMusic@gmail.com"
    );

    const mainCard = makeDiv('main-card');
    mainCard.appendChild(headingContainer);
    mainCard.appendChild(mrKrabs.makeCard());
    mainCard.appendChild(spongeBob.makeCard());
    mainCard.appendChild(Squidward.makeCard());
    return mainCard;
}