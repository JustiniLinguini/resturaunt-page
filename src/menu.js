import {makeDiv, makePara, makeCardHeading} from './makeElement';

export default function menuCardComponent(){

    const headingContainer = makeCardHeading("Menu");

    

    const mainCard = makeDiv('main-card');
    mainCard.appendChild(headingContainer);
    return mainCard;
}
