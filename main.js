/*import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/

// script.js

const audioPlayer = document.getElementById('audioPlayer');
const nowPlaying = document.getElementById('nowPlaying');

// Lista de canciones
const playlist = [
    { title: "Canco1", file: "musica/InTheEndLinkinPark.mp3" },
    { title: "Canco2", file: "musica/Numb(OfficialMusicVideo)LinkinPark.mp3" },
    { title: "Canco3", file: "musica/BlackBettyDukesOfHazzard).mp3" }
];

let currentSongIndex = 0;

// Función para cargar una canción
function loadSong(index) {
    audioPlayer.src = playlist[index].file;
    nowPlaying.textContent = 'Reproduciendo: ' + playlist[index].title;
    audioPlayer.play();
}

// Evento para pasar a la siguiente canción cuando termine la actual
audioPlayer.addEventListener('ended', function() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
});

// Cargar la primera canción al inicio
loadSong(currentSongIndex);
