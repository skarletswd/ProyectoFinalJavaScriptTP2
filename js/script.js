const paquetesTuristicos = [
    "1- Amantes de la nieve",
    "2- Navegación relajante y cómoda",
    "3- Montaña y naturaleza pura",
    "4- Paraíso terrenal",
    "5- Remo de travesía en familia",
    "6- Bici, montaña y excelente vista panorámica"
];

console.log(paquetesTuristicos)

const menuTur = document.querySelector(".paqsTur");
paquetesTuristicos.forEach(paquete => {
    menuTur.innerHTML += `<li><p>${paquete}</p><button type="submit">+</button></li>`
});


//reemplace mi funcion anterior por la asincronica await fetch

let detalleProductos;

const subirDetProdLocalStorage = async () => {
    detalleProductos = localStorage.getItem("detalleProductos");
    
    if(detalleProductos == null) {
        const response = await fetch("json/contenidoProductos.json");
        detalleProductos = await response.json();

        localStorage.setItem("detalleProductos", JSON.stringify(detalleProductos));
    }

    if(typeof detalleProductos == "string") {
        detalleProductos = JSON.parse(detalleProductos);
    }

}

// almacenamiento en el localStorage sin funcion asincronica await fetch

// let detalleProductos = localStorage.getItem("detalleProductos");

// if(detalleProductos == null) {
//     detalleProductos = [
//     {
//         codigo: 1,
//         descripcion: "Cerro Chapelco",
//         imagen: "img/chapelcoOpt.jpg",
//         detalle: "En San Martín de los Andes, plena cordillera de la provincia de Neuquén, el centro invernal Chapelco con su moderna infraestructura y la calidad de sus servicios, es el lugar de vacaciones más valorado por aquellos que buscan el clima mágico y vivir unas vacaciones inolvidables. Precio pase diario",
//         precio: 21800,
//         puntuacion: "*****"
//     },
//     {
//         codigo: 2,
//         descripcion: "Hua Hum, Quila Quina",
//         imagen: "img/quilaquinaOpt.jpg",
//         detalle: "Los catamaranes reposan todos los días a orillas del lago Lácar, en el muelle de la ciudad. De allí parten a Hua Hum y a la hermosa Quila Quina. En verano, en invierno, siempre...",
//         precio: 61400,
//         puntuacion: "*****"
//     },
//     {
//         codigo: 3,
//         descripcion: "Volcán Lanin y Lago Huechulafquen",
//         imagen: "img/laninOpt.jpg",
//         detalle: "Llevarán a su pequeño grupo (máximo 15) al Parque Nacional haciendo varias paradas en el camino hasta llegar al Volcán Lanín y al Lago Huechulafquen. También visitarás el lago Paimun, la Capilla del Lago y podrás explorar el bosque. Aprenda todo sobre la naturaleza",
//         precio: 21300,
//         puntuacion: "****"
//     },
//     {
//         codigo: 4,
//         descripcion: "Península Yuco",
//         imagen: "img/yuco.jpg",
//         detalle: "Espectacular bahía sobre el lago Lácar, con playas de arena ideales para balneario, aguas verde esmeralda y un entorno único de arrayanes.",
//         precio: 26500,
//         puntuacion: "*****"
//     },
//     {
//         codigo: 5,
//         descripcion: "Lago Lácar",
//         imagen: "img/remoOpt.jpg",
//         detalle: "En los Lagos de la Patagonia Argentina, remando por extraordinarios lugares e inmerso en imponentes paisajes, podrás disfrutar de nuestras excursiones de recreación y entretenimiento o realizar una actividad puramente deportiva rodeado por la mejor naturaleza…tengas o no experiencia.",
//         precio: 10000,
//         puntuacion: "****"
//     },
//     {
//         codigo: 6,
//         descripcion: "Mirador Arrayanes",
//         imagen: "img/miradorOpt.jpg",
//         detalle: "Con hermosa vista sobre casi la totalidad del lago Lácar y la Cordillera de los Andes, amplios miradores de reciente construcción, con acceso para discapacitados y moderna concepción, permiten disfrutar a pleno de toda la belleza del paisaje y la ciudad.",
//         precio: 15000,
//         puntuacion: "****"
//     }
// ];

// localStorage.setItem("detalleProductos", JSON.stringify(detalleProductos));
// }
// console.log(detalleProductos)

// detalleProductos = JSON.parse(localStorage.getItem("detalleProductos"));

// console.log("Ya Existe ", detalleProductos[0].codigo);


/////////////////

// for(let i=0; i<paquetesTuristicos.length; i++) {
//     menuTur.innerHTML += `<li><p>${paquetesTuristicos[i]}</p><button type="submit">+</button></li>` 
// }


// const hSecund = document.createElement("h4");

// hSecund.textContent = "Título dinámico";
// hSecund.setAttribute("id", "hSecund");

// console.log(hSecund);

// const liProdH = document.querySelector("li");
// liProdH.appendChild(hSecund);



// const pSecund = document.createElement("p");

// pSecund.textContent = "Párrafo dinámico";
// pSecund.setAttribute("id", "pSecund");

// console.log(pSecund);

// const liProdP = document.querySelector("li");
// liProdP.appendChild(pSecund);


// const aPrincipal = document.createElement("a");

// aPrincipal.textContent = "IrD";
// aPrincipal.setAttribute("id", "aPrincipal");

// console.log(aPrincipal);

// const liProdA = document.querySelector("li");
// liProdA.appendChild(aPrincipal);
