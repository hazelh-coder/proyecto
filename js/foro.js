document.addEventListener("DOMContentLoaded", () => {
    const btnPublicar = document.getElementById("btn-publicar");
    const usuarioInput = document.getElementById("usuario-input");
    const ubicacionInput = document.getElementById("ubicacion-input");
    const comentarioInput = document.getElementById("comentario-input");
    const foroPosts = document.getElementById("foro-posts");

    // Posts iniciales por defecto si el localStorage está vacío
    const postsIniciales = [
        {
            id: 1001,
            usuario: "UrbexTampico_99",
            ubicacion: "Esquina Ochavada",
            comentario: "Ayer logramos filtrarnos por la parte trasera. Las paredes están frías aunque afuera haga calor y en el video se escucha un zumbido eléctrico rítmico que no viene de ningún cableado activo. ¿Alguien más ha notado esto en las esquinas? Subí el clip a TikTok.",
            fecha: "12 de Octubre, 2026 - [01:14 hrs]"
        },
        {
            id: 1002,
            usuario: "Arq_Valeria",
            ubicacion: "Cuadrícula Central",
            comentario: "Estudiando los trazos originales del centro, descubrí que hay pasajes enteros que el INAH omitió en los registros del 70. Los ductos de ventilación no conectan con el drenaje, bajan hacia sótanos circulares sellados con concreto fresco.",
            fecha: "11 de Octubre, 2026 - [22:45 hrs]"
        }
    ];

    inicializarPosts();
    cargarPostsGuardados();

    if (btnPublicar) {
        btnPublicar.addEventListener("click", () => {
            const usuario = usuarioInput.value.trim() || "Ciudadano Anónimo";
            const ubicacion = ubicacionInput.value.trim() || "Centro Histórico";
            const comentario = comentarioInput.value.trim();

            if (comentario === "") {
                alert("Por favor, escriba el contenido de su denuncia o reporte.");
                return;
            }

            const nuevoPostData = {
                id: Date.now(),
                usuario: usuario,
                ubicacion: ubicacion,
                comentario: comentario,
                fecha: "Justo ahora - [Reporte en Red]"
            };

            guardarPostLocal(nuevoPostData);
            agregarPostAlDOM(nuevoPostData, true);

            usuarioInput.value = "";
            ubicacionInput.value = "";
            comentarioInput.value = "";
        });
    }

    function inicializarPosts() {
        if (!localStorage.getItem("foro_posts")) {
            localStorage.setItem("foro_posts", JSON.stringify(postsIniciales));
        }
    }

    function guardarPostLocal(post) {
        let posts = JSON.parse(localStorage.getItem("foro_posts")) || [];
        posts.unshift(post);
        localStorage.setItem("foro_posts", JSON.stringify(posts));
    }

    function cargarPostsGuardados() {
        foroPosts.innerHTML = "";
        let posts = JSON.parse(localStorage.getItem("foro_posts")) || [];
        posts.forEach(post => {
            agregarPostAlDOM(post, false);
        });
    }

    function agregarPostAlDOM(post, alInicio = true) {
        const postDiv = document.createElement("div");
        postDiv.className = "bg-white p-6 border border-stone-300 shadow-sm space-y-2";
        postDiv.setAttribute("data-id", post.id);

        postDiv.innerHTML = `
            <div class="flex justify-between items-center text-[10px] font-mono text-stone-500 border-b border-stone-200 pb-2">
                <span class="font-bold text-amber-900">@${post.usuario}</span>
                <span>${post.fecha}</span>
            </div>
            <h4 class="text-sm font-bold text-stone-800">Reporte ciudadano sobre: ${post.ubicacion}</h4>
            <p class="text-xs text-stone-700 leading-relaxed">${post.comentario}</p>
            <div class="pt-2 flex items-center space-x-4 text-[10px] font-mono text-stone-600">
                <span class="bg-stone-100 px-2 py-1 border border-stone-300">Ubicación: ${post.ubicacion}</span>
                <span class="text-red-700 font-bold">Verificado por Comunidad</span>
            </div>
        `;

        if (alInicio) {
            foroPosts.prepend(postDiv);
        } else {
            foroPosts.appendChild(postDiv);
        }
    }
});