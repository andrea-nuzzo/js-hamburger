// Seleziono le barre del hamburgher menu
const barMenu = document.querySelector('.fa-bars');

// All'evento click
barMenu.addEventListener("click",
    function(){
       // Aggiungo alla classe hamburger-menu l'active css
       let hamburgerMenu = document.querySelector(".hamburger-menu");
       hamburgerMenu.classList.add("active");       
    }
);


// Seleziono la x menu
const xMenu = document.querySelector('.fa-times');

// All'evento click
xMenu.addEventListener("click",
    function(){
        // Elimino alla classe hamburger-menu l'active css
       let returnHamburgerMenu = document.querySelector(".hamburger-menu");
       returnHamburgerMenu.classList.remove("active");       
    }
);