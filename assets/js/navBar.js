let burgerBtn = document.getElementById('burger-btn'),
    burgerSidebar = document.getElementById('burger-sidebar'),
    burgerOverlay = document.getElementById('burger-overlay'),
    burgerContent = document.getElementById('burger-content');
const openMenu = (width, display, className) => {
    burgerSidebar.style.width = width;
    burgerOverlay.style.display = display;
    burgerContent.classList.add(className);
};
const closeMenu = (width, display, className) => {
    burgerSidebar.style.width = width;
    burgerOverlay.style.display = display;
    burgerContent.classList.remove(className);
};
burgerBtn.addEventListener("click", () => {
    if (burgerSidebar.style.width === "0px") {
        openMenu("200px", "block", "menu-responsive-ul");
    } else {
        closeMenu("0", "none", "menu-responsive-ul");
    }
});
burgerOverlay.addEventListener("click", () => {
    closeMenu("0", "none", "menu-responsive-ul");
});
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        closeMenu("0", "none", "menu-responsive-ul");
    }
});
