import {makeDiv, makePara, makeCardHeading} from './makeElement';

export default function contactCardComponent(){

    const headingContainer = makeCardHeading("Contact Us");


    const mainCard = makeDiv('main-card');
    mainCard.appendChild(headingContainer);
    return mainCard;
}