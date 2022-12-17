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
    const headingContainer = makeDiv('heading-container');
    const heading = document.createElement('h1');
    const jellyEmoji = document.createElement('img');
    jellyEmoji.classList.add('emoji')
    jellyEmoji.src = Jelly;
    heading.textContent = "Dancing Jelly's Jelly Bar";
    headingContainer.appendChild(heading);
    headingContainer.appendChild(jellyEmoji);

    const mainCard = makeDiv('main-card');
    mainCard.appendChild(headingContainer);

    return mainCard;
}