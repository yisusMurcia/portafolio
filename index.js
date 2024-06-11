const futurosProyectos = [
    "Triqui",
    "Conecta 4"
];

const abrirFuturosProyectos=()=>{//Crear ventana emergente
    const mainEl = document.getElementsByTagName("main")[0];
    
    const sectionContainer = document.createElement("section");
    sectionContainer.classList.add("emergente");

    sectionContainer.innerHTML = `
    <h2>Futuros Proyectos</h2>
    <ul>`;
    for(let i= 0; i < 3; i++){
        sectionContainer.innerHTML += `<li>${futurosProyectos[i]}</li>`;
    }
    sectionContainer.innerHTML += `<ul>
    <button id= "boton-cerrar">cerrar</button>`;
    mainEl.appendChild(sectionContainer);
}



//Obtener botones
const botonFuturosProyectos = document.getElementById("futuros-proyectos");
const botonCerrar = document.getElementById("boton-cerrar");

//Añadir eventos de los botones
botonFuturosProyectos.addEventListener("click", ()=>{abrirFuturosProyectos()});
if (!botonCerrar){
    botonCerrar.addEventListener("click", ()=>{
        
    })
}