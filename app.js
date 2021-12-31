console.log("hello world");
var header = document.getElementsByClassName("header");
console.log(header);

for (var i = 0; i < header.length; i++) {
    console.log(header[i]);
    header[i].addEventListener("click", (e) => {
        var element = this.childNodes;
        console.log(element);
        console.log(i++);
        this.lastChild.classList.toggle("active");

    });
}