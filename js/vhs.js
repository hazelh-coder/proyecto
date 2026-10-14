document.addEventListener("DOMContentLoaded", () => {
    const btnEnviar = document.getElementById("btn-enviar-test");
    const formularioContainer = document.getElementById("formulario-container");
    const vhsContainer = document.getElementById("vhs-container");
    const vhsText = document.getElementById("vhs-text");

    // Frases del manual de supervivencia VHS que rotan de forma espeluznante
    const frasesVHS = [
        "\"Si escucha código Morse en el Edificio de Telégrafos, apague los radios y no responda a los pulsos...\"",
        "\"Nunca altere ni perfore las bóvedas del antiguo Palacio Municipal; lo que sostiene el peso no es concreto.\"",
        "\"Si la humedad de las paredes adquiere temperatura corporal, evacúe el perímetro inmediatamente.\"",
        "\"El Inspector de Bóvedas no tolera herramientas de hierro sin bendecir en las esquinas 18 y 19.\""
    ];

    btnEnviar.addEventListener("click", () => {
        // Ocultar formulario formal y mostrar el terror analógico VHS
        formularioContainer.classList.add("hidden");
        vhsContainer.classList.remove("hidden");

        // Cambiar dinámicamente las advertencias de los videos VHS cada 4 segundos
        let index = 0;
        setInterval(() => {
            index = (index + 1) % frasesVHS.length;
            vhsText.style.opacity = 0;
            setTimeout(() => {
                vhsText.textContent = frasesVHS[index];
                vhsText.style.opacity = 1;
            }, 200);
        }, 4000);
    });
});