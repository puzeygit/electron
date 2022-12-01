
const view = document.getElementById('myWebview');

function goHome() {
  view.loadURL('https://google.com');
}
function goBack() {
  view.goBack();
}
function goForward() {
  view.goForward();
}
function go() {
  view.loadURL(`https://${document.getElementById('url').value}`)
}

