function start() {

    let positionY = document.getElementById("about").getBoundingClientRect().y;

    document.body.scrollTop = positionY;
    document.documentElement.scrollTop = positionY;
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}