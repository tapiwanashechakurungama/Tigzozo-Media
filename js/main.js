var icon = document.getElementById("icon");
const body = document.body;
// body.classList.add('dark')
console.log(body);



icon.addEventListener('click', function(event){
        event.preventDefault();
        body.classList.toggle('dark')
   


})