window.addEventListener('scroll', (event) => {

    const navBar = document.getElementById("navBar");
    const navigator = document.getElementById("navigator");
    console.log("-----------------");
    if (navBar.clientHeight < window.scrollY) {
        navBar.classList.add("hidden");
        navigator.classList.remove("hidden");
    } else {
        navBar.classList.remove("hidden");
        navigator.classList.add("hidden");
    }

})


