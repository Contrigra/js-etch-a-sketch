const canvas = document.querySelector('.canvas');
const button = document.querySelector('.create-canvas-button');
button.addEventListener('click', changeName, {once: true});
button.addEventListener('click', clearCanvas);
button.addEventListener('click', createCanvas);

const checkbox = document.querySelector('#border-options')
checkbox.addEventListener('click', setBorder)

function setBorder(e) {
    let checkbox = document.querySelector('#border-options');
    let pixels = document.querySelectorAll('.pixel');
    if (checkbox.checked) {
        pixels.forEach(e => e.style.cssText = 'border: 1px solid black');
    } else {
        pixels.forEach(e => e.style.cssText = 'border: none');
    }
}

function changeName() {
    let button = document.querySelector('.create-canvas-button');
    button.textContent = 'Clear Canvas'
}

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


function createCanvas() {
    let size = document.querySelector('input').valueAsNumber;

    if (size > 50) {
        size = 5
    }

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


