document.addEventListener("DOMContentLoaded", () => {
    // Lógica para los micro-glitches en los textos institucionales
    const glitchElements = document.querySelectorAll(".glitch-text");

    glitchElements.forEach(el => {
        const originalText = el.getAttribute("data-original");
        const altText = el.getAttribute("data-alt");

        // Al pasar el cursor, cambia temporalmente el texto y aplica la clase de distorsión
        el.addEventListener("mouseenter", () => {
            el.textContent = altText;
            el.classList.add("glitch-active");
        });

        el.addEventListener("mouseleave", () => {
            el.textContent = originalText;
            el.classList.remove("glitch-active");
        });
    });

    // Efecto aleatorio de glitch espontáneo en algunos textos al hacer scroll rápido
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(st - lastScrollTop) > 50) {
            glitchElements.forEach(el => {
                if (Math.random() > 0.7) {
                    el.textContent = el.getAttribute("data-alt");
                    el.classList.add("glitch-active");
                    setTimeout(() => {
                        el.textContent = el.getAttribute("data-original");
                        el.classList.remove("glitch-active");
                    }, 300);
                }
            });
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
});