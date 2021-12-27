console.log("hello world");
var header = document.getElementsByClassName("header");
console.log(header);

for (var i = 0; i < header.length; i++) {
    console.log("hey");
    header[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });
}