// define inputs as a constant and query .controls input
const inputs = document.querySelectorAll('.controls input');

// update handler
function handleUpdate() {
    // console log this.value
    console.log('UPDATE :', this.value);
    // def suffix as constant with value of sizing or nothing
    const suffix = this.dataset.sizing || '';
    // console suffix
    console.log('SUFFIX :', this.dataset)
    // update variables: select document, set property --base --spacing --blur
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// inputs on change event listener
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs mousemove event listener
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));