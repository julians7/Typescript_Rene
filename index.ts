// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

document
  .querySelector('input[name="agree"]')
  .addEventListener('click', (event) => {
    console.log(event);

    // objekt toho elementu
  });
