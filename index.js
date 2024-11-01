const contenedorProyectos = document.getElementsByClassName("contenedor-proyectos")[0]
const botonObtenerCorreo = document.getElementById("boton-copiar-correo");


const displayProjects= async ()=>{//Obtener proyectos
    try{
        const response = await fetch("proyects.json")
        .then(response => {
            if(!response.ok){
                if (!response.ok) {
                    throw new Error(`Error en la red: ${response.status} ${response.statusText}`);
                }
            }
            return response.json()})
        .then(data => {
            //Mostrar los proyectos en el archivo
            data.proyectos.forEach((proyecto) => {const tarjetaProyecto = document.createElement("div");

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
            });
        })
    }catch(e){
        contenedorProyectos.innerHTML= "<h2> Algo salio mal</h2>";
    }
}

//Mostrar proyectos
displayProjects();

//Añadir eventos de los botones
botonObtenerCorreo.addEventListener("click", ()=>{navigator.clipboard.writeText("yisusmurci@gmail.com")})