console.log("welcome");

const gambar = document.getElementById('gambar');

gambar.setAttribute('width', 300);
gambar.setAttribute('height', 215);

// const buttons = document.querySelectorAll('.button');

const buttons = document.getElementsByClassName('button');


const playButton = buttons[3];

const playButtonElement = playButton.children[0];

playButtonElement.setAttribute('type', 'submit');

const dicoding = document.getElementById('dicodingLink');

// dicoding.innerText = "Belajar Pemograman di Dicoding";

dicoding.innerHTML = "<i>Belajar Pemograman di Dicoding</i?";

const google = document.getElementById('googleLink');

// google.innerText = "Mencari sesuatu di Google";
google.innerHTML = "<i>Mencari sesuatu di Google</i>";

for(const button of buttons){
    button.children[0].style.borderRadius = "6px";
}
