let usuarios = [];

function agregar() {
    let nombre = document.getElementById("nombre").value;
    usuarios.push(nombre);
    mostrar();
}

function mostrar() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    usuarios.forEach((u, i) => {
        lista.innerHTML += `
        <li>
            ${u}
            <button onclick="eliminar(${i})">Eliminar</button>
        </li>`;
    });
}

function eliminar(index) {
    usuarios.splice(index, 1);
    mostrar();
}