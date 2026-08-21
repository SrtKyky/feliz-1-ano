/* =========================================
   ELEMENTOS
========================================= */

const yesButton =
    document.getElementById("yesButton");


const noButton =
    document.getElementById("noButton");


const startScreen =
    document.getElementById("startScreen");


const letterScreen =
    document.getElementById("letterScreen");


const likedButton =
    document.getElementById("likedButton");


const music =
    document.getElementById("music");


const musicButton =
    document.getElementById("musicButton");


const musicPlayer =
    document.getElementById("musicPlayer");


const musicStatus =
    document.getElementById("musicStatus");



/* =========================================
   BOTÃO SIM
========================================= */

yesButton.addEventListener(
    "click",
    function() {

        /*
            Esconde a primeira tela.
        */

        startScreen.style.display =
            "none";


        /*
            Mostra a carta.
        */

        letterScreen.classList.add(
            "show"
        );


        /*
            Tenta iniciar a música.
        */

        music.play()
            .then(function() {

                musicButton.textContent =
                    "❚❚";

                musicStatus.textContent =
                    "♫ tocando...";

            })
            .catch(function(error) {

                console.log(
                    "A música não pôde ser iniciada:",
                    error
                );

            });

    }
);



/* =========================================
   BOTÃO NÃO
========================================= */

noButton.addEventListener(
    "mouseover",
    function() {

        noButton.style.position =
            "fixed";


        const maxX =
            window.innerWidth -
            noButton.offsetWidth;


        const maxY =
            window.innerHeight -
            noButton.offsetHeight;


        const randomX =
            Math.random() * maxX;


        const randomY =
            Math.random() * maxY;


        noButton.style.left =
            randomX + "px";


        noButton.style.top =
            randomY + "px";

    }
);



/* =========================================
   BOTÃO DE PAUSAR / CONTINUAR
========================================= */

musicButton.addEventListener(
    "click",
    function() {

        if (!music.paused) {

            music.pause();

        }

        else {

            music.play()
                .catch(function(error) {

                    console.log(
                        "Não foi possível continuar a música:",
                        error
                    );

                });

        }

    }
);



/* =========================================
   SINCRONIZA O PLAYER COM A MÚSICA
========================================= */

music.addEventListener(
    "play",
    function() {

        musicPlayer.classList.remove(
            "paused"
        );


        musicButton.textContent =
            "❚❚";


        musicStatus.textContent =
            "♫ tocando...";

    }
);


music.addEventListener(
    "pause",
    function() {

        musicPlayer.classList.add(
            "paused"
        );


        musicButton.textContent =
            "▶";


        musicStatus.textContent =
            "♫ pausado";

    }
);



/* =========================================
   BOTÃO "EU AMO VOCÊ"
========================================= */

likedButton.addEventListener(
    "click",
    function() {

        /*
            Impede múltiplos cliques.
        */

        if (
            letterScreen.classList.contains(
                "kirbyShow"
            )
        ) {

            return;

        }


        /*
            Desabilita o botão.
        */

        likedButton.disabled =
            true;


        /*
            Kirby aparece no centro.
        */

        letterScreen.classList.add(
            "kirbyShow"
        );


        /*
            Espera o Kirby aparecer
            antes de começar a sucção.
        */

        setTimeout(
            function() {

                letterScreen.classList.add(
                    "devouring"
                );

            },
            1000
        );


        /*
            Depois da carta desaparecer,
            aparece a fala do Kirby.
        */

        setTimeout(
            function() {

                letterScreen.classList.add(
                    "kirbyFinished"
                );

            },
            3000
        );

    }
);