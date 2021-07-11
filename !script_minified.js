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

window.onload = function() {
    document.getElementById("language").addEventListener("click", () => {
        let links = document.getElementById("linksContainer").childNodes
        if(links[0]) {
            links[0].innerHTML = "Kebab";
        } 
        
    })
}