
import {makeDiv, makePara, makeCardHeading} from './makeElement';


export default function homeCardComponent(){

    //heading
    
    const headingContainer = makeCardHeading("Dancing Jelly's Jelly Bar");

    //card quote

    const quote = makePara('quote');
    quote.textContent = `We love Dancing Jelly's in our family,
    it is the finest Jelly establishment in all of the coast!
    I highly recommend trying a jelly margherita, it'll blow
    your tentacles off!`;

    const author = makePara('author');
    author.textContent = "- Squidward Tentacles";

    const quoteCard = makeDiv('card');
    quoteCard.appendChild(quote);
    quoteCard.appendChild(author);

    //card hours

    const week = ["Sunday", "Monday","Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]
    const hourCard = makeDiv('card');
    const hourHeading = document.createElement('h3');
    hourHeading.textContent = "Hours";
    hourCard.appendChild(hourHeading);

    week.forEach(day =>{
        const para = makePara('day');

        if(day == "Sunday"){
            para.textContent = `${day}: 8am - 8pm`;
        } else if(day == "Thursday" || day == "Friday"){
            para.textContent = `${day}: 6am - 10pm`;
        } else if(day == "Saturday"){
            para.textContent = `${day}: 8am - 10pm`;
        } else{
            para.textContent = `${day}: 6am - 6pm`;
        }

        hourCard.appendChild(para);
    })
    
    //location info

    const locationCard = makeDiv('card');
    const locationHeading = document.createElement('h3');
    locationHeading.textContent = "Location"
    const locationPara = makePara('location');
    locationPara.textContent = "101 Bikini Bottom Lane";

    locationCard.appendChild(locationHeading);
    locationCard.appendChild(locationPara);

    //greeting card

    const greetingCard = makeDiv('card');
    const greetingHeading = document.createElement('h4');
    greetingHeading.textContent = "We look forward to seeing you!";
    greetingCard.appendChild(greetingHeading);

    //adding elements to main card

    const mainCard = makeDiv('main-card');
    mainCard.appendChild(headingContainer);
    mainCard.appendChild(quoteCard);
    mainCard.appendChild(hourCard);
    mainCard.appendChild(locationCard);
    mainCard.appendChild(greetingCard);

    return mainCard;
}