let buttons = ["action", "fantasy", "urban", "svenska"];
let btndiv = document.getElementById("btndiv");
let i = 0;
let sentencediv = document.getElementById("sentence");

buttons.forEach(element => {
    let btn = document.createElement('button');
    btn.id = element;
    btn.textContent = capitalizeFirstLetter(element);
    btn.classList.add('btn');
    btn.classList.add('btn-lg');
    btn.classList.add('btn-custom');
    btn.classList.add('m-2');
    btn.classList.add('handwriting');
    btn.type = 'button';
    btn.id = element;
    btn.addEventListener('click', function() {
        let sentence = getSentence(eval(element));
        console.log(sentence);
        sentencediv.textContent = sentence;
    });
    btndiv.appendChild(btn);
});

function getSentence(type)
{
    console.log(type);
    let structure = type.structure.toString().split(',');
    let sentence = "";
    structure.forEach(element => {
        sentence = sentence + type[element][getRandomInt(type[element].length)] + " ";
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