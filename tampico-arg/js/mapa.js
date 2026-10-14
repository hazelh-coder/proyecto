document.addEventListener("DOMContentLoaded", () => {
    // Inicializar el mapa centrado en el Centro Histórico de Tampico
    // Coordenadas aproximadas de la zona centro de Tampico, Tamaulipas
    const map = L.map('map').setView([22.2158, -97.8576], 15);

    // Capa de mapa base pública de Esri (Sin API Key, libre y compatible con ejecuciones locales)
const osmLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(map);

    // Marcadores institucionales (Superficie / Triángulo Turístico)
    const markerAduana = L.marker([22.2104, -97.8515]).addTo(map)
        .bindPopup("<b>Aduana Marítima</b><br>Zona restaurada y turística.");

    const markerPlaza = L.marker([22.2165, -97.8571]).addTo(map)
        .bindPopup("<b>Plaza de Armas</b><br>Corazón del centro histórico.");

    // Marcadores y elementos ocultos (Revelados con el Filtro de Humedad)
    // Manzanas muertas y punto del KFC en Col. Águila
    const alertKFC = L.circle([22.2350, -97.8690], {
        color: 'darkred',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 120
    });

    const routeEvacuacion = L.polyline([
        [22.2158, -97.8576],
        [22.2220, -97.8610],
        [22.2350, -97.8690]
    ], {color: '#991b1b', weight: 4, dashArray: '5, 10'});

    const markerManzanasMuertas = L.marker([22.2200, -97.8600], {opacity: 0});

    let modoOculto = false;
    const btnFiltro = document.getElementById("btn-filtro");
    const mapContainer = document.getElementById("map");
    const mapTitle = document.getElementById("map-title");
    const mapSubtitle = document.getElementById("map-subtitle");
    const alertaMapa = document.getElementById("alerta-mapa");
    const bodyMap = document.getElementById("body-map");

    btnFiltro.addEventListener("click", () => {
        modoOculto = !modoOculto;

        if (modoOculto) {
            // Aplicar filtro de terror analógico / humedad
            mapContainer.classList.add("map-humedad");
            bodyMap.classList.add("bg-neutral-900", "text-red-500");
            
            mapTitle.textContent = "CARTOGRAFÍA DE EVACUACIÓN Y ANOMALÍAS DE 1823";
            mapTitle.classList.add("text-red-600");
            mapSubtitle.textContent = "ALERTA: Mostrando rutas subterráneas norte y colonias de encubrimiento arqueológico.";
            mapSubtitle.classList.add("text-red-400");

            btnFiltro.textContent = "Restaurar Vista Turística Normal";
            btnFiltro.classList.remove("bg-amber-800", "hover:bg-amber-900");
            btnFiltro.classList.add("bg-red-800", "hover:bg-red-900");

            alertaMapa.classList.remove("hidden");

            // Añadir elementos ocultos al mapa
            alertKFC.addTo(map).bindPopup("<b>[ZONA CLASIFICADA]</b><br>Estructura arqueológica encubierta bajo establecimiento comercial (KFC - Col. Águila).");
            routeEvacuacion.addTo(map);

        } else {
            // Quitar filtro y regresar a la vista normal
            mapContainer.classList.remove("map-humedad");
            bodyMap.classList.remove("bg-neutral-900", "text-red-500");

            mapTitle.textContent = "Mapa Oficial del Triángulo Turístico";
            mapTitle.classList.remove("text-red-600");
            mapSubtitle.textContent = "Visualización de zonas restauradas y corredores comerciales del centro histórico.";
            mapSubtitle.classList.remove("text-red-400");

            btnFiltro.textContent = "Activar Filtro de Humedad (1823)";
            btnFiltro.classList.add("bg-amber-800", "hover:bg-amber-900");
            btnFiltro.classList.remove("bg-red-800", "hover:bg-red-900");

            alertaMapa.classList.add("hidden");

            // Remover elementos ocultos del mapa
            map.removeLayer(alertKFC);
            map.removeLayer(routeEvacuacion);
        }
    });
});