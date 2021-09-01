window.addEventListener('scroll', (event) => {

    const NAVBAR    = document.getElementById("navBar");
    const NAVIGATOR = document.getElementById("navigator");
    const BACKTOTOP = document.getElementById("backToTop");
    
    if (NAVBAR.clientHeight < window.scrollY) {
        NAVBAR.classList.add("hidden");
        if(navigator.userAgent.toLowerCase().match(/mobile/i)) {
            NAVIGATOR.classList.remove("hidden"); 
        }
        BACKTOTOP.classList.remove("hidden");
    } else {
        NAVBAR.classList.remove("hidden");
        if(navigator.userAgent.toLowerCase().match(/mobile/i)) {
            NAVIGATOR.classList.add("hidden"); 
        }
        BACKTOTOP.classList.add("hidden");
    }

})

window.onload = function() {
    document.getElementById("language").addEventListener("click", () => {
        
    })
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}