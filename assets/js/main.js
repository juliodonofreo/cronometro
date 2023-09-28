function criarData() {
    return new Date(0, 0, 0, 00, 00, 00);
}

function main(){    
    const relogio = document.querySelector(".cronometro");
    const zerar = document.querySelector(".zerar");
    const pausar = document.querySelector(".pausar");
    const iniciar = document.querySelector(".iniciar");

    let data = criarData();
    let intervalo;
    
    iniciar.addEventListener("click", ()=>{
        intervalo = setInterval(()=> {
            data.setSeconds(data.getSeconds() + 1);
            relogio.innerHTML = data.toLocaleTimeString('pt-BR');
        }, 1000);
    });

    pausar.addEventListener("click", ()=>{
        relogio.style.color = "red";
        clearInterval(intervalo);
    });

    zerar.addEventListener("click", ()=>{
        clearInterval(intervalo);
        relogio.style.color = "black";
        data = criarData();
        relogio.innerHTML = data.toLocaleTimeString('pt-BR');
    });
}

main();

