let links = document.querySelectorAll('.recette-link'),
    displayRecetteContainer = document.querySelectorAll('.js-recette-container'),
    bodyOverlay = document.querySelector('#overlay'),
    recetteOverlay = document.querySelector('#recette');

function openRecette(recette, overlay) {
    if(!recette.classList.contains("open")){
        recette.style.display = "block";
        overlay.classList.add("open");
        recetteOverlay.style.display = "block";
    }
}

function closeRecette() {
    bodyOverlay.classList.remove("open");
    displayRecetteContainer.forEach(() => {
        while (recetteOverlay.firstChild) {
            recetteOverlay.removeChild(recetteOverlay.firstChild);
        }
        recetteOverlay.style.display = "none";
    })
}

document.addEventListener("DOMContentLoaded", () => {
    links.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openRecette(displayRecetteContainer[index], bodyOverlay);
            afficherRecette(index);
        });
    });

    if (bodyOverlay !== undefined && bodyOverlay) {
        bodyOverlay.addEventListener("click", (e) => {
            e.preventDefault();
            closeRecette();
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            closeRecette();
        }
    });
});

function afficherRecette(index) {
    let listeRecette = document.querySelectorAll(".list-recette");
    let listeRecetteSpan = listeRecette[index].children;
    let titrePreparation = document.createElement("h6");
    let stepId = 1;
    titrePreparation.innerText = "Étape de préparation";
    recetteOverlay.appendChild(titrePreparation);

    for (let i = 0; i < listeRecetteSpan.length; i++) {
        console.log(i + " ==> " +  listeRecetteSpan[i]);
        if (listeRecetteSpan[i].dataset['step' + stepId]) {
            const step = document.createElement("p");
            step.innerText = listeRecetteSpan[i].dataset['step' + stepId];
            recetteOverlay.appendChild(step);
        }
        stepId++;
    }
}
