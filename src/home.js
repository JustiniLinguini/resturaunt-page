import Jelly from './imgs/jelly.png'

function makeDiv(){
    const div = document.createElement('div');

    let args = Array.from(arguments);
    args.forEach(arg =>{
        div.classList.add(arg)
    })

    return div;
}

export default function homeCardComponent(){
    //heading container
    const headingContainer = makeDiv('heading-container');
    const heading = document.createElement('h1');
    const jellyEmoji = document.createElement('img');
    jellyEmoji.classList.add('emoji')
    jellyEmoji.src = Jelly;
    heading.textContent = "Dancing Jelly's Jelly Bar";
    headingContainer.appendChild(heading);
    headingContainer.appendChild(jellyEmoji);

    //card quote

    const quote = document.createElement('p');
    quote.textContent = `We love Dancing Jelly's in our family,
    it is the finest Jelly establishment in all of the coast!
    I highly recommend trying a jelly margherita, it'll blow
    your tentacles off!`;
    quote.classList.add('quote')

    const author = document.createElement('p');
    author.textContent = "- Squidward Tentacles";
    author.classList.add('author');

    const quoteCard = makeDiv('card');
    quoteCard.appendChild(quote);
    quoteCard.appendChild(author);


    const mainCard = makeDiv('main-card');
    mainCard.appendChild(headingContainer);
    mainCard.appendChild(quoteCard);

    return mainCard;
}