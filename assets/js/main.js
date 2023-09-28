function adicionarSegundo(relogio) {
    const  minutos = relogio.textContent;
    console.log(minutos);
}

function main(){    
    const relogio = document.querySelector(".cronometro");
    const zerar = document.querySelector(".zerar");
    const pausar = document.querySelector(".pausar");
    const iniciar = document.querySelector(".iniciar");

    const data = new Date(2003, 06, 16, 00, 00, 00);

    let intervalo;
    
    iniciar.addEventListener("click", ()=>{
        intervalo = setInterval(()=> {
            data.setSeconds(data.getSeconds() + 1);
            relogio.innerHTML = data.toLocaleTimeString('pt-BR');
        }, 1000);
    });

    zerar.addEventListener("click", ()=>{
        relogio.innerHTML = "Zerar"

    });


    pausar.addEventListener("click", ()=>{
        relogio.style.color = "red";
        clearInterval(intervalo);
    });
}

main();

