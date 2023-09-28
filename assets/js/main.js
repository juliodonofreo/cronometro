function adicionarSegundo(relogio) {
    const  minutos = relogio.textContent;
    console.log(minutos);
}

function main(){    
    const relogio = document.querySelector(".cronometro");
    const zerar = document.querySelector(".zerar");
    const pausar = document.querySelector(".pausar");
    const iniciar = document.querySelector(".iniciar");


    iniciar.addEventListener("click", ()=>{
        const data = new Date(2003, 12, 16, 00, 00, 00);
        setInterval(()=> {
            data.setSeconds(data.getSeconds() + 1);
            relogio.innerHTML = data.toLocaleTimeString('pt-BR');
        }, 1000);
    });

    zerar.addEventListener("click", ()=>{
        relogio.innerHTML = "Zerar"

    });

    pausar.addEventListener("click", ()=>{
        relogio.innerHTML = "Pausar"

    });
}

main();

