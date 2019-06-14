function myFunction() {
    document.getElementById("demo").innerHTML = "SUCCESS!";
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "red";
}

// define inputs as a constant and query .controls input
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))