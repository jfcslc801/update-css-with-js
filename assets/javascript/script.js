function myFunction() {
    document.getElementById("demo").innerHTML = "SUCCESS!";
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "red";
}

// define inputs as a constant and query .controls input
const inputs = document.querySelectorAll('.controls input');

// update handler
function handleUpdate(){
    // console.log('UPDATE :', this.value);
    // def suffix as constant with value of sizing
    const suffix = this.dataset.sizing;
}

// inputs on change event listener
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs mousemove event listener
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));