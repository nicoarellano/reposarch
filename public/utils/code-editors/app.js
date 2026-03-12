var j = 0;

// Listen for autocomplete messages from parent
window.addEventListener('message', (event) => {
  if (event.data.type === 'autocomplete' && event.data.code) {
    const htmlField = document.getElementById('htmlCode');
    const cssField = document.getElementById('cssCode');
    const jsField = document.getElementById('javascriptCode');

    if (htmlField) htmlField.value = event.data.code.html || '';
    if (cssField) cssField.value = event.data.code.css || '';
    if (jsField) jsField.value = event.data.code.js || '';

    // Trigger update to refresh the preview
    setTimeout(() => update(0), 0);
  }
});

//Function for live Rendering
function update(i) {
  if (i == 0) {
    let htmlCode = document.getElementById('htmlCode').value;
    let cssCode = document.getElementById('cssCode').value;
    let javascriptCode = document.getElementById('javascriptCode').value;
    let text =
      htmlCode +
      '<style>' +
      cssCode +
      '</style>' +
      '<scri' +
      'pt>' +
      javascriptCode +
      '</scri' +
      'pt>';
    let iframe = document.getElementById('viewer').contentWindow.document;
    iframe.open();
    iframe.write(text);
    iframe.close();
  } else if (i == 1) {
    let htmlCode = document.getElementById('htmlCode').value;
    let html = htmlCode.slice(0, htmlCode.length);
    document.getElementById('htmlCode').value = html;
    j = 1;
  }
}

const htmlBoilerplate =
  '<div class="card">\n  <h1 id="greeting">Deblackboxing:</h1>\n  <p>Open-source toolmaking for architects.</p>\n  <button id="magicButton">Open Black Box!</button>\n  <br /><br />\n  <img id="boxImage" src="/images/blackBox.png" alt="Black-Box" width="180" />\n</div>';
const cssBoilerplate =
  '.card {\n  border: 2px solid #333;\n  padding: 20px;\n  text-align: center;\n  border-radius: 12px;\n  font-family: sans-serif;\n  background-color: #f9f9f9;\n}\n\nbutton {\n  background-color: #007bff;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0056b3;\n}';
const jsBoilerplate = `const button = document.getElementById('magicButton');
const boxImage = document.getElementById('boxImage');
let isOpen = false;

button.addEventListener('click', () => {
  isOpen = !isOpen;
  if (isOpen) {
    boxImage.src = '/images/openBox.png';
    button.textContent = 'Close Box!';
  } else {
    boxImage.src = '/images/blackBox.png';
    button.textContent = 'Open Black-Box!';
  }
});`;

window.htmlBoilerplate = htmlBoilerplate;
window.cssBoilerplate = cssBoilerplate;
window.jsBoilerplate = jsBoilerplate;
