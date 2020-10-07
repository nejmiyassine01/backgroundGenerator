const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const main = document.querySelector('main'); 


btn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('button clicked');
    let i = Math.floor(Math.random() * colors.length);
    
    color.innerHTML = colors[i];
    main.style.backgroundColor = colors[i];
})
