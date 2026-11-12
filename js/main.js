document.addEventListener("DOMContentLoaded", () => {
    const heroCard = document.getElementById("hero-card");
    const esloganMain = document.getElementById("eslogan-main");
    const originalEslogan = esloganMain.textContent;

    if (heroCard) {
        heroCard.addEventListener("mouseenter", () => {
            esloganMain.textContent = "\"Despejando el subsuelo.\"";
            esloganMain.classList.add("text-red-700");
        });

        heroCard.addEventListener("mouseleave", () => {
            esloganMain.textContent = originalEslogan;
            esloganMain.classList.remove("text-red-700");
        });
    }
});