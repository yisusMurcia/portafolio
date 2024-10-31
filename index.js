const contenedorProyectos = document.getElementsByClassName("contenedor-proyectos")[0]
const botonObtenerCorreo = document.getElementById("boton-copiar-correo");


// Proyectos mostrados en la pantalla
const proyectos = [
    {
        titulo: "Triqui",
        enlace: "https://github.com/yisusMurcia/triqui",
        descripcion: "Un código para jugar el famoso juego de triqui o tres en raya, ya sea para jugar con otra persona o contra el algoritmo.", 
        img: "triqui.png",
    },
    {
        titulo: "Menu",
        descripcion: "Un app para crear y editar un menu de comida",
        enlace: "https://github.com/yisusMurcia/menu",
        img: "menu.png"
    },
    {
        titulo: "Playlist",
        descripcion: "Un programa para crear y editar una playlist de musica",
        enlace: "https://github.com/yisusMurcia/playlist",
        img: "playlist.png"
    },
    {
        titulo: "Pinta cuadrados",
        descripcion: "Un programa para pintar cuadrados de dimensiones aleatorias al hacer click en alguna parte de la ventana",
        enlace: "https://github.com/yisusMurcia/dibujoDeCuadros",
        img: "cuadros.png"
    }
]

//Mostrar proyectos
for (const proyecto of proyectos) {
    const tarjetaProyecto = document.createElement("div");

    tarjetaProyecto.classList.add("proyecto");
    
    
    //Llenar la tarjeta
    tarjetaProyecto.innerHTML= `
    <img src= "img/proyectos/${proyecto?.img? proyecto.img: 'default.jpeg'}">
    <span>
        <h3>${proyecto.titulo}</h3>
        <hr>
        <p>${proyecto.descripcion}</p>
    </span>`;
    
    tarjetaProyecto.addEventListener("click", ()=>{
        window.open(proyecto.enlace, "_blank");
    })
    
    contenedorProyectos.appendChild(tarjetaProyecto)
}

//Añadir eventos de los botones
botonObtenerCorreo.addEventListener("click", ()=>{navigator.clipboard.writeText("yisusmurci@gmail.com")})