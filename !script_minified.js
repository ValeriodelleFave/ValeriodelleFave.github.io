function start() {

    let positionY = document.getElementById("about").getBoundingClientRect().y;

    document.body.scrollTop = positionY;
    document.documentElement.scrollTop = positionY;
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function resetActiveLink() {
    document.getElementById("presentationLink").classList.remove("active");
    document.getElementById("aboutLink").classList.remove("active");
    document.getElementById("projectsLink").classList.remove("active");
    document.getElementById("hobbyLink").classList.remove("active");
    document.getElementById("contactsLink").classList.remove("active");
}

function checkScrolling() {
    let presentationY = document.getElementById("presentation").getBoundingClientRect().y,
        aboutY        = document.getElementById("about").getBoundingClientRect().y,
        projectsY     = document.getElementById("projects").getBoundingClientRect().y,
        hobbyY        = document.getElementById("hobby").getBoundingClientRect().y,
        contactsY     = document.getElementById("contacts").getBoundingClientRect().y;

    resetActiveLink()

    if (presentationY >= 0 && presentationY <= aboutY) {
        document.getElementById("presentationLink").classList.add("active");
    } else if (aboutY >= 0 && aboutY <= projectsY) {
        document.getElementById("aboutLink").classList.add("active");
    } else if (projectsY >= 0 && projectsY <= hobbyY) {
        document.getElementById("projectsLink").classList.add("active");
    } else if (hobbyY >= 0 && hobbyY <= contactsY) {
        document.getElementById("hobbyLink").classList.add("active");
    } else if (contactsY >= 0) {
        document.getElementById("contactsLink").classList.add("active");
    } else {

    }

}



document.addEventListener("scroll", checkScrolling, false);
