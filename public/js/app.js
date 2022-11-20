document.addEventListener("DOMContentLoaded", function(event) {
    const buttonSubmit = document.getElementById('buttonSubmit')
    buttonSubmit.addEventListener('click',function(event) {
        console.log(event)
        console.log('click')   
    })
});