const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const main = document.querySelector('main');

//Method 1

function randCol() {
    let colArr = [];
    for (let i = 0; i < 6; i++) {

        let rand = hex[Math.floor(Math.floor(Math.random() * hex.length))];

        colArr.push(rand);
    }
    return "#" + colArr.join("");
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    main.style.backgroundColor = randCol();
    color.innerHTML = randCol();    

})

//Method 2
/*
function randNum() {
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randNum()];
    }

    main.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;

})
*/