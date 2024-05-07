var icon = document.getElementById("icon");
const body = document.body;
console.log(body);



icon.addEventListener('click', function(event){
        event.preventDefault();
        body.classList.toggle('dark')
})
