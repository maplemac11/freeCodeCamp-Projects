// main.js
document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '<p>JavaScript is running!</p>';

    // Example of a simple function
    function greet(name) {
        console.log(`Hello, ${name}!`);
    }

    greet('World');
});
