import { productoServices } from "../services/producto-servicio.js";

const nuevoProducto = (imagenUrl,name,precio,id) => {
    const card = document.createElement("div");
    const contenido = `
                        <div class="card_producto">                        
                        <img src="${imagenUrl}" alt="imagen">
                        <h5 class="card_font">${name}</h5>
                        <p class="card_font">${precio}</p>              
                        <a class="card_ver_producto" href="../screems/mostrar-producto.html?id=${id}" id="${id}">Ver Producto</a> 
                        </div>    
                       `;
    card.innerHTML = contenido;    
    return card;                  
};

const seccionSahumerio = document.querySelector("[data-sahumerio]");
//Agregar en seccion Sahumerio
const productosSahumerio = () =>{
 return fetch("http://localhost:3000/producto?cat=sahumerio")
   .then(respuesta=> respuesta.json())
   .catch (error=>console.log("error"));
 
};
productosSahumerio()
 .then ((data)=>{
     data.forEach((element) => {
        seccionSahumerio.appendChild(nuevoProducto(element.imagenUrl,element.name,element.precio,element.id));
      
     });
 });

 



