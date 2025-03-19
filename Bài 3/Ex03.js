document.querySelectorAll(".square").forEach(square => {
    square.addEventListener("click", function () {
        document.body.style.backgroundColor = this.id;
    });
});
console.log(document.querySelectorAll(".square"));