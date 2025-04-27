const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get('title');
const content = urlParams.get('content');
const buttiontext = urlParams.get('buttiontext');
const background = urlParams.get('background');
const backgroundimg = urlParams.get('backgroundimg');
const url = urlParams.get('url');
const pagetitle = urlParams.get('pagetitle');
console.log("Title:", title);
console.log("Content:", content);
console.log("ButtionText:", buttiontext);
console.log("BackgroundURL:", background);
console.log("Url:", url);
function openDialog() {
    document.getElementById('dialog-box').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}


function closeDialog() {
    document.getElementById('dialog-box').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function Buttion() {
    window.location.href = url;
}