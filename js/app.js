let filtros = { texto: "", categoria: "todas" };

function aplicarFiltros() {
    const lista = document.getElementById("lista");
    const contador = document.getElementById("contador");
    const texto = filtros.texto.trim().toLowerCase();

    const resultado = PALABRAS.filter(function (item) {
        const cumpleTexto = texto === "" ||
            item.palabra.toLowerCase().includes(texto) ||
            item.descripcion.toLowerCase().includes(texto);
        const cumpleCategoria = filtros.categoria === "todas" || item.categoria === filtros.categoria;
        return cumpleTexto && cumpleCategoria;
    });

    lista.innerHTML = "";
    resultado.forEach(function (item) {
        const li = document.createElement("li");
        li.className = "palabra cat-" + item.categoria;

        const nombre = document.createElement("code");
        nombre.className = "palabra-nombre";
        nombre.textContent = item.palabra;

        const descripcion = document.createElement("span");
        descripcion.className = "palabra-descripcion";
        descripcion.textContent = item.descripcion;

        const etiqueta = document.createElement("span");
        etiqueta.className = "palabra-categoria";
        etiqueta.textContent = item.categoria;

        li.appendChild(nombre);
        li.appendChild(descripcion);
        li.appendChild(etiqueta);
        lista.appendChild(li);
    });

    contador.textContent = "Mostrando " + resultado.length + " de " + PALABRAS.length + " palabras";
}

document.getElementById("titulo").textContent = APP_TITULO;
document.getElementById("subtitulo").textContent = APP_SUBTITULO;
document.getElementById("version").textContent = "v" + APP_VERSION;
aplicarFiltros();
