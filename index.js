const contenedorProyectos = document.getElementsByClassName("contenedor-proyectos")[0]
const futurosProyectos = [
    "Triqui",
    "Conecta 4",
    "calculadora",
    "convertidor de medidas"
];

// Proyectos mostrados en la pantalla
const proyectos = [
    {
        titulo: "Triqui",
        enlace: "https://github.com/yisusMurcia/triqui",
        descripcion: "Un código para jugar el famoso juego de triqui o tres en raya, ya sea para jugar con otra persona o contra el algoritmo.", 
    },
    {
        titulo: "Menu",
        descripcion: "Un app para crear y editar un menu de comida",
        enlace: "https://github.com/yisusMurcia/menu",
    },
    {
        titulo: "Playlist",
        descripcion: "Un programa para crear y editar una playlist de musica",
        enlace: "https://github.com/yisusMurcia/playlist",
    },
    {
        
    }
]

//Mostrar proyectos
for (const proyecto of proyectos) {
    const tarjetaProyecto = document.createElement("div");

    tarjetaProyecto.classList.add("proyecto");
    tarjetaProyecto.style.backgroundImage = proyecto?.img? `url(img/proyectos/${proyecto.img})`: `url(img/proyectos/default.jpg)`;
    
    
    //Llenar la tarjeta
    tarjetaProyecto.innerHTML= `<h3>${proyecto.titulo}</h3>
    <hr>
    <p>${proyecto.descripcion}</p>`;
    
    tarjetaProyecto.addEventListener("click", ()=>{
        window.open(proyecto.enlace, "_blank");
    })
    
    contenedorProyectos.appendChild(tarjetaProyecto)
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