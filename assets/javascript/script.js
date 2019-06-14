function myFunction() {
    document.getElementById("demo").innerHTML = "SUCCESS!";
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "red";
}

// define inputs as a constant and query .controls input
const inputs = document.querySelectorAll('.controls input');

// update handler
function handleUpdate(){
    console.log(this.value);
}

// inputs on change event listener
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs mouseover event listener
inputs.forEach(input => input.addEventListener('mouseover', handleUpdate));