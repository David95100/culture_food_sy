let links = document.querySelectorAll('.recette-link'),
    displayRecetteContainer = document.querySelectorAll('.js-recette-container'),
    bodyOverlay = document.querySelector('#overlay');

function openRecette(recette, overlay) {
    if(!recette.classList.contains("open")){
        recette.style.display = "block";
        overlay.classList.add("open");
    }
}

function closeRecette() {
    bodyOverlay.classList.remove("open");
    displayRecetteContainer.forEach((recette) => {
        recette.style.display = "none";
    })
}

document.addEventListener("DOMContentLoaded", () => {
    links.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openRecette(displayRecetteContainer[index], bodyOverlay);
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
