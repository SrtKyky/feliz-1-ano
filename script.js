javascript
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

const kirbyImage =
    document.getElementById("kirbyImage");


/* =========================================
   BOTÃO SIM
========================================= */

yesButton.addEventListener(
    "click",
    function() {

        startScreen.style.display =
            "none";

        letterScreen.classList.add(
            "show"
        );

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
         * Impede que a animação seja
         * iniciada mais de uma vez.
         */

        if (
            letterScreen.classList.contains(
                "kirbyShow"
            )
        ) {

            return;

        }


        /*
         * Desativa o botão.
         */

        likedButton.disabled =
            true;


        /*
         * Garante que o primeiro GIF
         * seja o Kirby que devora a carta.
         */

        kirbyImage.src =
            "assets/Kirby.gif";


        /*
         * Faz o Kirby aparecer.
         */

        letterScreen.classList.add(
            "kirbyShow"
        );


        /*
         * Depois de 1 segundo,
         * começa a animação da carta
         * sendo devorada.
         */

        setTimeout(
            function() {

                letterScreen.classList.add(
                    "devouring"
                );

            },
            1000
        );

    }
);


/* =========================================
   SINCRONIZA COM O FINAL DA ANIMAÇÃO
========================================= */

const letter =
    document.getElementById("letter");


letter.addEventListener(
    "animationend",
    function(event) {

        /*
         * Verificamos especificamente
         * se a animação que terminou foi
         * a animação de devorar a carta.
         */

        if (
            event.animationName !==
            "devourLetter"
        ) {

            return;

        }


        /*
         * Troca o GIF do Kirby.
         */

        kirbyImage.src =
            "assets/Kirby-fofo.gif";


        /*
         * Faz o novo Kirby aparecer
         * e libera o balão de fala.
         */

        letterScreen.classList.add(
            "kirbyFinished"
        );

    }
);
