window.addEventListener('scroll', (event) => {

    const NAVBAR = document.getElementById("navBar");
    const NAVIGATOR = document.getElementById("navigator");
    
    if (NAVBAR.clientHeight < window.scrollY) {
        NAVBAR.classList.add("hidden");
        NAVIGATOR.classList.remove("hidden");
    } else {
        NAVBAR.classList.remove("hidden");
        NAVIGATOR.classList.add("hidden");
    }

})


