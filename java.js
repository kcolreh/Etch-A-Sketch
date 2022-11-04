const container = document.querySelector('.container');
const slider = document.querySelector('#range');
const grid = document.querySelectorAll('.grid');


createGrid();

slider.addEventListener('change', function () {
    let boxes = document.querySelectorAll('.grid');
    boxes.forEach(box => {
        box.remove();//removes old grid
    });
    createGrid() //makes new grid afte reset


})


function createGrid() {
    for (let i = 0; i < (slider.value * slider.value); i++) {
        const grid = document.createElement('div');
        let a = slider.value;
        const boxSize = 250 / a; //Creates dynamic boxes
        grid.classList.add('grid');
        grid.style.width = boxSize + 'px';
        grid.style.height = boxSize + 'px';
        container.appendChild(grid);
    }
    //Paints the divs when you hover your mouse over them;
    const hover = document.querySelectorAll('.grid');
    hover.forEach((div) => {
        div.addEventListener('mouseover', function () {
            div.classList.add('change');
        });
    });

}

//Erases all the painted divs;
const clear = document.querySelector('#clear');
clear.addEventListener('click', function () {
    const hover = document.querySelectorAll('.grid');
    hover.forEach((div) => {
        div.classList.remove('change', 'rainbow');
        div.style.backgroundColor = '';
    })
});

//Erses the paint when you hover your mouse over them
const eraser = document.querySelector('#erase');
eraser.addEventListener('click', function () {
    const boxes = document.querySelectorAll('.grid');
    boxes.forEach((div) => {
        div.addEventListener('mouseover', function () {
            div.classList.remove('change', 'rainbow');
            div.style.backgroundColor = '';
        });
    });
});
generateRandomColor ()
const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', function () {
    const boxes = document.querySelectorAll('.grid');
    boxes.forEach((div) => {
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = generateRandomColor ();
        })
    })
})

colorpicker.addEventListener('change', function () {
    const boxes = document.querySelectorAll('.grid');
    boxes.forEach((div) => {
        div.addEventListener('mouseover', function () {
            let color = colorpicker.value;
            console.log(color)
            div.style.backgroundColor = color;

        })
    })
})

function generateRandomColor (){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}