const paquetesTuristicos = [
    "Cerro Chapelco: Amantes de la nieve",
    "Navegación: Escapada medio día",
    "Volcán Lanin: Lomás popular",
    "Península Yuco: Paraíso terrenal",
    "Rafting: Adictos a la adrenalina",
    "Montaña: En bici medio día"
];

console.log(paquetesTuristicos)

const menuTur = document.querySelector(".paqsTur");
for(let i=0; i<paquetesTuristicos.length; i++) {
    menuTur.innerHTML += `<li><p>${paquetesTuristicos[i]}</p><button type="submit">+</button></li>` 
}


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
