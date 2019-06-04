let buttons = ["action", "fantasy", "urban"];
let btndiv = document.getElementById("btndiv");
let i = 0;
let sentencediv = document.getElementById("sentence");

buttons.forEach(element => {
    let btn = document.createElement('button');
    btn.id = element;
    btn.textContent = capitalizeFirstLetter(element);
    btn.classList.add('btn');
    btn.classList.add('btn-custom');
    btn.classList.add('m-2');
    btn.type = 'button';
    btn.id = element;
    btn.addEventListener('click', function() {
        let sentence = getSentence(element);
        console.log(sentence);
        sentencediv.textContent = sentence;
    });
    btndiv.appendChild(btn);
});

function getSentence(type)
{
    let structure = eval(type).structure.toString().split(',');
    let first = 0;
    let sentence = "";
    structure.forEach(element => {
        //console.log(action[element]);
        sentence = sentence + action[element][getRandomInt(action[element].length)] + " ";
    });

    return capitalizeFirstLetter(sentence).trim() + ".";
}


function getRandomInt(max)
{
    return Math.floor(Math.random() * Math.floor(max));
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}