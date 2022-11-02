const container = document.querySelector('.container');


for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
}


//Paints the divs when you hover your mouse over them;
const hover = document.querySelectorAll('.grid');
hover.forEach((div) => {
    div.addEventListener('mouseover', function () {
        div.classList.add('change');
    });
});

//Erases all the painted divs;
const clear = document.querySelector('#clear');
clear.addEventListener('click', function () {
    const hover = document.querySelectorAll('.grid');
    hover.forEach((div) => {
        div.classList.remove('change');
    })


});

//Erses the paint when you hover your mouse over them
const eraser = document.querySelector('#erase');
eraser.addEventListener('click', function () {
    const hover2 = document.querySelectorAll('.grid');
    hover2.forEach((div) => {
        div.addEventListener('mouseover', function () {
            div.classList.remove('change');
        });
    });
});

