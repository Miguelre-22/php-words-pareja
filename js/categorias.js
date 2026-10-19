(function () {
    const controles = document.getElementById("controles");

    const desplegable = document.createElement("select");
    desplegable.id = "categorias";

    const categorias = ["todas"];
    PALABRAS.forEach(function (item) {
        if (!categorias.includes(item.categoria)) {
            categorias.push(item.categoria);
        }
    });

    categorias.forEach(function (categoria) {
        const opcion = document.createElement("option");
        opcion.value = categoria;
        opcion.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        desplegable.appendChild(opcion);
    });

    desplegable.value = filtros.categoria;

    desplegable.addEventListener("change", function () {
        filtros.categoria = desplegable.value;
        aplicarFiltros();
    });

    controles.appendChild(desplegable);
})();
