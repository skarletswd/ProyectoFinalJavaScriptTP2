let contenidoProductos;

const subirDetProdLocalStorage = async () => {

    // listaProductos.innerHTML = "";

    contenidoProductos = localStorage.getItem("contenidoProductos");
    
    if(contenidoProductos == null) {
        const response = await fetch("json/contenidoProductos.json");
        contenidoProductos = await response.json();

        localStorage.setItem("contenidoProductos", JSON.stringify(contenidoProductos));
    }

    if(typeof contenidoProductos == "string") {
        contenidoProductos = JSON.parse(contenidoProductos);
    }

    console.log(contenidoProductos);

    // contenidoProductos.forEach(mostrarProducto);
};

subirDetProdLocalStorage();



// crear el producto q se va a mostrar

// let mostrarProducto;

// let productoHTML;

let detalleProducto;

detalleProducto = document.querySelector(".detalleProducto");
contenidoProductos.forEach(producto => {
    detalleProducto.innerHTML += `
        <article>
            <h2>${producto.descripcion}</h2>
            <img src="img/${producto.imagen}">
            <p>${producto.detalle}</p>
            <p>${producto.precio}</p>
            <p>${producto.puntuacion}</p>
        </article>
    `;
});

