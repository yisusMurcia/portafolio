const contenedorProyectos = document.getElementsByClassName("contenedor-proyectos")[0]
const futurosProyectos = [
    "Triqui",
    "Conecta 4",
    "calculadora",
    "convertidor de medidas"
];

const proyectos = [
    {
        titulo: "Triqui",
        tecnologias: ["python"],
        enlace: "https://github.com/yisusMurcia/triqui",
        descripcion: "Un código para jugar el famoso juego de triqui o tres en raya, ya sea para jugar con otra persona o contra el algoritmo.",
        img : 'triqui.png'
    }
]

//Mostrar proyectos
for (const proyecto of proyectos) {
    const tarjetaProyecto = document.createElement("div");

    tarjetaProyecto.classList.add("proyecto");

    tarjetaProyecto.style.backgroundImage = `url(img/proyectos/${proyecto.img})`
    
    contenedorProyectos.appendChild(tarjetaProyecto)

    //Llenar la tarjeta
    tarjetaProyecto.innerHTML= `<h3>${proyecto.titulo}</h3>
    <div class="contenedor-tecnologias"> ${proyecto.tecnologias.join("<hr>")}</div>
    <p>${proyecto.descripcion}</p>
    <a href="${proyecto.enlace}">Código</a>`

}

const abrirFuturosProyectos=()=>{//Crear ventana emergente
    const mainEl = document.getElementsByTagName("main")[0];
    
    const sectionContainer = document.createElement("section");
    sectionContainer.classList.add("emergente");

    sectionContainer.innerHTML = `<h2>Futuros Proyectos</h2>
    <ul>`;
    for(let i= 0; i < futurosProyectos.length; i++){
        sectionContainer.innerHTML += `<li>${futurosProyectos[i]}</li>`;
    }
    sectionContainer.innerHTML += `<ul>
    <br>`;

    mainEl.appendChild(sectionContainer);
    
    document.addEventListener("click", (e)=>{
        const el = e.target;
        if (el != sectionContainer && el != botonFuturosProyectos){//Cerrar la ventana al clickear otro elemento
            sectionContainer.remove();
        }
    })
    
}



//Obtener botones
const botonFuturosProyectos = document.getElementById("futuros-proyectos");
const botonObtenerCorreo = document.getElementById("boton-copiar-correo");

//Añadir eventos de los botones
botonFuturosProyectos.addEventListener("click", ()=>{abrirFuturosProyectos()});
botonObtenerCorreo.addEventListener("click", ()=>{navigator.clipboard.writeText("yisusmurci@gmail.com")})