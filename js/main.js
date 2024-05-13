var icon = document.getElementById("icon");
const body = document.body;
console.log(body);



icon.addEventListener('click', function(event){
        event.preventDefault();
        body.classList.toggle('dark')
})
var ham = document.getElementById("ham");
const nav = document.getElementById("nav");



ham.onclick = function(event){
body.classList.toggle("active")
}
