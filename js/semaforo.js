document.addEventListener("DOMContentLoaded", () => {
    const btnSemaforo = document.getElementById("btn-semaforo");
    const bodyContainer = document.getElementById("body-container");
    const headerBar = document.getElementById("header-bar");
    const headerTitle = document.getElementById("header-title");
    const mainHeading = document.getElementById("main-heading");
    const subHeading = document.getElementById("sub-heading");
    const statusBadge = document.getElementById("status-badge");
    const expedientes = document.querySelectorAll(".expediente-secreto");
    const cards = document.querySelectorAll(".card-inmueble");

    let activo = false;

    btnSemaforo.addEventListener("click", () => {
        activo = !activo;

        if (activo) {
            // Transformación a modo de Terror Analógico / Expedientes Secretos
            bodyContainer.classList.remove("bg-stone-100", "text-stone-800");
            bodyContainer.classList.add("bg-neutral-950", "text-red-500", "scanlines");

            headerBar.classList.remove("bg-amber-900", "border-amber-950");
            headerBar.classList.add("bg-red-950", "border-red-900");

            headerTitle.textContent = "NIVEL DE ACTIVIDAD ANÓMALA / RIESGO PARANORMAL";
            mainHeading.textContent = "EXPEDIENTES SECRETOS DE CONTENCIÓN";
            mainHeading.classList.remove("text-amber-950");
            mainHeading.classList.add("text-red-600");

            subHeading.textContent = "CRITERIO DE COLAPSO: ACTIVIDAD DE ENTIDADES Y DEGRADACIÓN PSÍQUICA";
            subHeading.classList.add("text-red-400");

            statusBadge.textContent = "ALERTA: NIVEL ROJO CRÍTICO";
            statusBadge.classList.remove("bg-stone-200", "text-stone-700");
            statusBadge.classList.add("bg-red-900", "text-red-200", "border-red-700");

            // Estilos oscuros para las tarjetas
            cards.forEach(card => {
                card.classList.remove("bg-white", "border-stone-300");
                card.classList.add("bg-neutral-900", "border-red-900/60", "text-neutral-300");
            });

            // Mostrar expedientes ocultos
            expedientes.forEach(exp => exp.classList.remove("hidden"));

            btnSemaforo.innerHTML = `<span class="w-3 h-3 bg-stone-400 rounded-full"></span><span>RESTRABLECER VISTA INSTITUCIONAL (OCULTAR)</span>`;
            btnSemaforo.classList.remove("bg-red-700", "hover:bg-red-800");
            btnSemaforo.classList.add("bg-stone-800", "hover:bg-stone-900");

        } else {
            // Restaurar vista institucional limpia
            bodyContainer.classList.add("bg-stone-100", "text-stone-800");
            bodyContainer.classList.remove("bg-neutral-950", "text-red-500", "scanlines");

            headerBar.classList.add("bg-amber-900", "border-amber-950");
            headerBar.classList.remove("bg-red-950", "border-red-900");

            headerTitle.textContent = "INVENTARIO OFICIAL DE EDIFICIOS PROTEGIDOS";
            mainHeading.textContent = "Catálogo Patrimonial de Tampico";
            mainHeading.classList.add("text-amber-950");
            mainHeading.classList.remove("text-red-600");

            subHeading.textContent = "Fichas técnicas de conservación estructural e historia arquitectónica.";
            subHeading.classList.remove("text-red-400");

            statusBadge.textContent = "5 Edificios Registrados";
            statusBadge.classList.add("bg-stone-200", "text-stone-700");
            statusBadge.classList.remove("bg-red-900", "text-red-200", "border-red-700");

            cards.forEach(card => {
                card.classList.add("bg-white", "border-stone-300");
                card.classList.remove("bg-neutral-900", "border-red-900/60", "text-neutral-300");
            });

            expedientes.forEach(exp => exp.classList.add("hidden"));

            btnSemaforo.innerHTML = `<span class="w-3 h-3 bg-red-400 rounded-full animate-ping"></span><span>CONSULTAR SEMÁFORO DE RIESGO ESTRUCTURAL</span>`;
            btnSemaforo.classList.add("bg-red-700", "hover:bg-red-800");
            btnSemaforo.classList.remove("bg-stone-800", "hover:bg-stone-900");
        }
    });
});