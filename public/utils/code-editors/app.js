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
