const burgerBtn = document.getElementById('burger-btn');
      burgerSidebar = document.getElementById('burger-sidebar');
      burgerOverlay = document.getElementById('burger-overlay');
      burgerContent = document.getElementById('burger-content');
      menuItems = document.getElementById('menu-items');

const openBurgerMenu = () => {
    burgerSidebar.style.width = "60vw";
    burgerOverlay.style.display = "block";
    burgerContent.classList.add("menu-responsive-ul");
};

const closeBurgerMenu = () => {
    burgerSidebar.style.width = "0";
    burgerOverlay.style.display = "none";
    burgerContent.classList.remove("menu-responsive-ul");
};

burgerBtn.addEventListener("click", () => {
    if (burgerSidebar.style.width === "60vw") {
        closeBurgerMenu();
    } else {
        openBurgerMenu();
    }
});

burgerOverlay.addEventListener("click", () => {
    closeBurgerMenu();
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        closeBurgerMenu();
    }
});
