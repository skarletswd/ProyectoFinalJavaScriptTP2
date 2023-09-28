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
