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
document.querySelector('.create-canvas-button').addEventListener('click', clearCanvas);
document.querySelector('.create-canvas-button').addEventListener('click', () => createCanvas(20)) // TODO remove 20


function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

function clearCanvas() {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(e => e.remove())
}

function createCanvas(size) {
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        pixel.addEventListener('mouseover', changeColor)
        pixel.addEventListener('mousedown', changeColor)
        canvas.appendChild(pixel)
    }
}

createCanvas(20)
