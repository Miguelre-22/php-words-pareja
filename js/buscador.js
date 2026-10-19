(function () {
    const controles = document.getElementById("controles");

    const buscador = document.createElement("input");
    buscador.type = "search";
    buscador.id = "buscador";
    buscador.placeholder = "Buscar palabra o descripción...";
    buscador.autocomplete = "off";

    buscador.addEventListener("input", function () {
        filtros.texto = buscador.value;
        aplicarFiltros();
    });

    controles.appendChild(buscador);
})();
