/*
 TODO create 16x16 grid of square divs

 TODO Hover effect
 hover effect on divs
 change color of a div with hover (by adding a class + css)

 TODO button for a custom grid. Number of squares per side
 limit 100x100 grid. Use prompts
 grid should be of the same total space as before (limit big grid container to 960px)

 TODO change color when you hover over it
 Each pass through with the mouse change it to a completely random RPG value. Each pass should add 10% of black to the previous one
*/

const canvas = document.querySelector('.canvas');

function createCanvas(i = 32) {
    let canvas = document.querySelector('.canvas');

}


document.querySelector('.create-canvas-button').addEventListener('click', () => createCanvas())

let pixel = document.createElement('div');
pixel.classList.add('pixel');

for (let i = 0; i < 100; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    canvas.append(pixel);
}


