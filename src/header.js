
function makeButton(str){
    const button = document.createElement('button');
    button.textContent = str;
    button.classList.add('page-selector');
    button.setAttribute('id', str);

    return button;
}

export default function headerComp(){
    const header = document.createElement('header');

    let args = Array.from(arguments);

    args.forEach(arg =>{
        try{
            let str = arg.toString();
            const button = makeButton(str);
            header.appendChild(button);
        }
        catch(err){
            console.log(err);
            const button = makeButton("ERROR");
            header.appendChild(button);
        }
    });

    return header;
}