function Food() {
    window.location.href = "about1.html";
}
function done() {
    window.location.href = "delivery.html";
}
function back() {
    window.location.href = "restaurant.html";
}

var index = 0;

function carousel() {
    var x = document.getElementsByClassName("slider");
    for (var i = 0; i < 3; i++) {
        x[i].style.display = "none";
    }
    index++;
    if (index > x.length) {
        index = 1;
    }
    x[index - 1].style.display = "block";
    setTimeout(carousel, 1000)
}

carousel();