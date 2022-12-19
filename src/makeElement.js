import Jelly from './imgs/jelly.png';

export function makeDiv(){
    const div = document.createElement('div');

    let args = Array.from(arguments);
    args.forEach(arg =>{
        div.classList.add(arg)
    })

    return div;
}

export function makePara(){
    const para = document.createElement('p');

    let args = Array.from(arguments);
    args.forEach(arg =>{
        para.classList.add(arg)
    })

    return para;
}

export function makeCardHeading(str){
    const headingContainer = makeDiv('heading-container');
    const heading = document.createElement('h1');
    const jellyEmoji = document.createElement('img');
    jellyEmoji.classList.add('emoji')
    jellyEmoji.src = Jelly;
    heading.textContent = str;
    headingContainer.appendChild(heading);
    headingContainer.appendChild(jellyEmoji);

    return headingContainer;
}