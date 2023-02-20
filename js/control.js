const valor  = document.querySelectorAll('.light');
const valor1 = document.getElementById('timer');
let count = 0;
let countPaso = 0;
let color1 = 6;
let color2 = 9;
let color3 = 16;
let mostrarValor = 00;
function counter() {
    if(countPaso <= color1){
        count = 0;
    }else if(countPaso > color1 && countPaso <= color2){
        count = 1;
    }else if(countPaso > color2 && countPaso <= color3){
        count = 2;
    }else{
        countPaso = 0;
        count = 0;
    }
    if(count == 0){
        valor[0].classList.add('rojo');
        valor[1].classList.remove('amarillo');
        valor[2].classList.remove('verde');
        valor1.style.color = 'red';
        valor1.innerHTML = (color1-countPaso);
    }else if(count == 1){
        valor[1].classList.add('amarillo');
        valor[0].classList.remove('rojo');
        valor[2].classList.remove('verde');
        valor1.style.color = 'yellow';
        valor1.innerHTML = (color2-countPaso);
    }else if(count == 2){
        valor[2].classList.add('verde');
        valor[0].classList.remove('rojo');
        valor[1].classList.remove('amarillo');
        valor1.style.color = 'green';
        valor1.innerHTML = (color3-countPaso);
    }
    countPaso++;
    console.log('Cont = ' + count);
    console.log('countPaso = ' + countPaso);
}

setInterval(counter,1000);