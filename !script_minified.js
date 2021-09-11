var presentationY, aboutY, projectsY, hobbyY, contactsY;  

function start() {
    let positionY = document.getElementById("about").getBoundingClientRect().y;
    document.body.scrollTop = positionY;
    document.documentElement.scrollTop = positionY;
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onload = function () {
    presentationY = document.getElementById("presentation").getBoundingClientRect().y;
    aboutY        = document.getElementById("about").getBoundingClientRect().y;
    projectsY     = document.getElementById("projects").getBoundingClientRect().y;
    hobbyY        = document.getElementById("hobby").getBoundingClientRect().y;
    contactsY     = document.getElementById("contacts").getBoundingClientRect().y;
}

function resetActiveLink() {
    document.getElementById("presentationLink").classList.remove("active");
    document.getElementById("aboutLink").classList.remove("active");
    document.getElementById("projectsLink").classList.remove("active");
    document.getElementById("hobbyLink").classList.remove("active");
    document.getElementById("contactsLink").classList.remove("active");
}

function checkScrolling() {
    let scrollTop = document.documentElement.scrollTop;

    resetActiveLink()

    if (scrollTop >= 0 && scrollTop <= aboutY) {
        document.getElementById("presentationLink").classList.add("active");
    } else if (scrollTop >= aboutY && scrollTop <= projectsY) {
        document.getElementById("aboutLink").classList.add("active");
    } else if (scrollTop >= projectsY && scrollTop <= hobbyY) {
        document.getElementById("projectsLink").classList.add("active");
    } else if (scrollTop >= hobbyY && scrollTop <= contactsY) {
        document.getElementById("hobbyLink").classList.add("active");
    } else if (scrollTop >= contactsY) {
        document.getElementById("contactsLink").classList.add("active");
    }
}

document.addEventListener("scroll", checkScrolling, false);
