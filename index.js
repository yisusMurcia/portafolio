const futurosProyectos = [
    "Triqui",
    "Conecta 4",
    "calculadora",
    "convertidor de medidas"
];

const abrirFuturosProyectos=()=>{//Crear ventana emergente
    const mainEl = document.getElementsByTagName("main")[0];
    
    const sectionContainer = document.createElement("section");
    sectionContainer.classList.add("emergente");

    sectionContainer.innerHTML = `
    <h2>Futuros Proyectos</h2>
    <ul>`;
    for(let i= 0; i < futurosProyectos.length; i++){
        sectionContainer.innerHTML += `<li>${futurosProyectos[i]}</li>`;
    }
    sectionContainer.innerHTML += `<ul>
    <br>`;

    mainEl.appendChild(sectionContainer);
    
    document.addEventListener("click", (e)=>{
        const el = e.target;
        if (el != sectionContainer && el != botonFuturosProyectos){
            sectionContainer.remove();
        }
    })
    
    }



//Obtener botones
const botonFuturosProyectos = document.getElementById("futuros-proyectos");


//Añadir eventos de los botones
botonFuturosProyectos.addEventListener("click", ()=>{abrirFuturosProyectos()});
