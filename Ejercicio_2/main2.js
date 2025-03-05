const canvas = document.querySelector('#canvas');
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');


// numero de lineas
let linesNum = Math.max(canvas.height, canvas.width);

let C = linesNum * 2;
let k = 120;

for (let step = 0; step < linesNum; step++) {
    //Funcion Exponencia para distancia entra lineas :)
    let normalizedStep = step / linesNum;
    // factor de crecimiento de distancia entre linea
    let factor = (Math.exp(normalizedStep * k) - 1) / (Math.exp(k) - 1);
    factor = (normalizedStep + factor) / 2;

    let spacing = C * factor;
    console.log(spacing);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.moveTo(0, spacing);
    ctx.lineTo(spacing, 0);
    ctx.stroke();
}




ctx.beginPath();
ctx.ellipse(canvas.width*.5, canvas.height*0.9, canvas.height*.4, canvas.height*.4, -Math.PI / 4, Math.PI, 2 * Math.PI);
ctx.fillStyle = "#FF5349";
ctx.fill();
