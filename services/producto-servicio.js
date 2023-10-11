//lista de procuto
const listaProductos = () =>{
    return fetch("https://www.freetogame.com/api/games")
    .then (respuesta => respuesta.json())
    .catch(error=>console.log("error"))
};


//Para buscar un Producto
const buscarProducto = (id)=>{
      return fetch(`https://www.freetogame.com/api/game?id=${id}`)
         .then((respuesta)=> respuesta.json());
}; 
export const productoServices={
    listaProductos,
    buscarProducto,
};