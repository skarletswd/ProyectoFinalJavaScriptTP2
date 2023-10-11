const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
const idProducto = urlParams.get('id');


function buscarProducto(){
    let productos = localStorage.getItem("productos");
    
    if(productos != null){      
         
        productos = JSON.parse(productos);

        let producto ="";
        let html =""; 

        productos.forEach(function(prod){

            if(prod.id == idProducto){
                producto = prod;
            }
        })
        if(producto != ""){
              html +=  `
              <article>
                  <h2>${producto.id}<h2>${producto.descripcion}</h2>
                  <img src="img/${producto.imagen}">
                  <p>${producto.detalle}</p>
                  <p>${producto.precio}</p>
                  <p>${producto.puntuacion}</p>
              </article>
              `;
              document.querySelector("#detalleProducto").innerHTML = html;  
          }
      }
          
  }

  buscarProducto();



// let contenidoProductos;
// let detalleProducto;

// const subirDetProdLocalStorage = async () => {

//     // detalleProducto.innerHTML = "";

//     contenidoProductos = localStorage.getItem("contenidoProductos");
    
//     if(contenidoProductos == null) {
//         const response = await fetch("json/contenidoProductos.json");
//         contenidoProductos = await response.json();

//         localStorage.setItem("contenidoProductos", JSON.stringify(contenidoProductos));
//     }

//     if(typeof contenidoProductos == "string") {
//         contenidoProductos = JSON.parse(contenidoProductos);
//     }

//     console.log(contenidoProductos);

//     // contenidoProductos.forEach(mostrarProducto);
// };


// subirDetProdLocalStorage();

// crear el producto q se va a mostrar





// detalleProducto = document.querySelector("#detalleProducto");
// contenidoProductos.forEach(producto => {
//     detalleProducto.innerHTML += `
//         <article>
//             <h2>${producto.descripcion}</h2>
//             <img src="img/${producto.imagen}">
//             <p>${producto.detalle}</p>
//             <p>${producto.precio}</p>
//             <p>${producto.puntuacion}</p>
//         </article>
//     `;
// });

// document.addEventListener("click", (event) => {
//     console.log(event.target);
// });

