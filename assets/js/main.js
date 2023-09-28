function criarData() {
    return new Date(0, 0, 0, 00, 00, 00);
}

function adicionarSegundo(data) {
    data.setSeconds(data.getSeconds() + 1);
    return data.toLocaleTimeString('pt-BR');
}

function main(){    
    const relogio = document.querySelector(".cronometro");
    const zerar = document.querySelector(".zerar");
    const pausar = document.querySelector(".pausar");
    const iniciar = document.querySelector(".iniciar");

    let data = criarData();
    let intervalo;
    
    iniciar.addEventListener("click", ()=>{
        clearInterval(intervalo);
        intervalo = setInterval(()=> {
            relogio.innerHTML = adicionarSegundo(data);
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

