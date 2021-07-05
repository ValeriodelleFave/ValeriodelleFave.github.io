window.addEventListener('scroll', (event) => {

    const navBar = document.getElementById("navBar")
    console.log(navBar.clientHeight);
    console.log(window.scrollY);
    console.log("-----------------");
    if (navBar.clientHeight < window.scrollY) {
        navBar.classList.add("hidden");
    } else {
        navBar.classList.remove("hidden");
    }

})