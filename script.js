let cells = document.querySelectorAll(".white");
let balls = document.querySelectorAll(".ball");


cells.forEach(cell => {
    cell.addEventListener("click", function(event) {
        let isBusy = event.target.classList.contains("busy");
        console.log(event);
        let posLeft = event.target.getAttribute("data-left");
        let posTop = event.target.getAttribute("data-top");

        let selectedBall = document.querySelector(".ball.selected");
        if (selectedBall) {
            selectedBall.style.left = posLeft + "px";
            selectedBall.style.top = posTop + "px";
            console.log(posLeft, posTop);
            selectedBall.classList.remove("selected");
            
        };

    }, false);
});

balls.forEach(ball => {
    ball.addEventListener("click", function(event) {
        event.target.classList.add("selected");
    }, false);
});