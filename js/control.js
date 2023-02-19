number = 10;
function rojo() {
    let color1 = document.getElementById('primero');
    color1.style.background = 'red';
    color1.classList.add('primero');
    let color2 = document.getElementById('segundo');
    color2.classList.remove('segundo')
    let color3 = document.getElementById('tercero');
    color3.classList.remove('tercero')
    color2.style.background = '#4e4949';
    color3.style.background = '#4e4949';
    let borde1 = document.getElementById('timer');
    borde1.style.color = 'red';
    number = 60;
    timer();
}
function amarillo() {
    let color = document.getElementById('segundo');
    color.style.background = 'yellow';
    color.classList.add('segundo');
    let color2 = document.getElementById('primero');
    color2.classList.remove('primero')
    let color3 = document.getElementById('tercero');
    color3.classList.remove('tercero')
    color2.style.background = '#4e4949';
    color3.style.background = '#4e4949';
    let borde2 = document.getElementById('timer');
    borde2.style.color = 'yellow';
    number = 3;
    timer();
}
function verde() {
    let color = document.getElementById('tercero');
    color.style.background = 'green';
    color.classList.add('tercero');
    let color2 = document.getElementById('primero');
    color2.classList.remove('primero')
    let color3 = document.getElementById('segundo');
    color3.classList.remove('segundo')
    color2.style.background = '#4e4949';
    color3.style.background = '#4e4949';
    let borde3 = document.getElementById('timer');
    borde3.style.color = 'green';
    number = 60;
    timer();
}


const timer = setInterval(()=>{
    console.log(number);
    number--;
    if(number == 0){
        clearInterval(timer);
    }
},1000)

