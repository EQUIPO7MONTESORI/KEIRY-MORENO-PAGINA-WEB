
document.addEventListener("DOMContentLoaded", function () {

    // TRADUCCIONES
    const languages = {

        es: {
            title: "¡Bienvenidos a mi página!",
            about: "Sobre mí",
            project: "Mi proyecto de vida",

            description: "Me llamo Keiry Yuliana Moreno Bedoya, nací el 2 de abril de 2011. Actualmente tengo 15 años y de grande quiero trabajar en negocios internacionales. Me gusta entrenar vóley, casi no salgo, mi comida favorita es la hamburguesa y me gusta la plata. Me gusta compartir con mis papás, tengo 2 hermanos y me gusta el color azul y los animales.",

            projectDescription: "Mi proyecto de vida es estudiar, salir adelante, cumplir mis sueños y trabajar en negocios internacionales. Quiero esforzarme para tener un buen futuro y hacer sentir orgullosa a mi familia.",

            footer: "© 2026 - Keiry Moreno"
        },

        en: {
            title: "Welcome to my website!",
            about: "About me",
            project: "My life project",

            description: "My name is Keiry Yuliana Moreno Bedoya. I was born on April 2, 2011. I am currently 15 years old, and when I grow up I want to work in international business. I like playing volleyball, I don't go out very often, my favorite food is hamburgers, and I like money. I enjoy spending time with my parents, I have 2 siblings, and I like the color blue and animals.",

            projectDescription: "My life project is to study, succeed, achieve my dreams, and work in international business. I want to work hard to have a good future and make my family proud.",

            footer: "© 2026 - Keiry Moreno"
        }

    };


    // FUNCION PARA CAMBIAR IDIOMA
    function changeLanguage(language) {

        const translations = languages[language];

        if (!translations) return;

        // Buscar elementos con data-label
        document.querySelectorAll("[data-label]").forEach(element => {

            const label = element.dataset.label;

            if (translations[label] !== undefined) {
                element.textContent = translations[label];
            }

        });

        // Cambiar idioma de HTML
        document.documentElement.lang = language;

        // Activar botón seleccionado
        document.querySelectorAll(".lang-button").forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.language === language
            );

        });

        // Guardar idioma
        localStorage.setItem("language", language);

    }


    // CONECTAR LOS BOTONES
    const buttons = document.querySelectorAll(".lang-button");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            changeLanguage(this.dataset.language);

        });

    });


    // CARGAR IDIOMA GUARDADO
    const savedLanguage = localStorage.getItem("language") || "es";

    changeLanguage(savedLanguage);

});
