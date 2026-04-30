// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.getElementById('horn-select');
  const hornAudio = document.querySelector('audio');
  const hornImg = document.querySelector('#expose img')
  selectElement.addEventListener('change', function(event){
    if(event.target.value === 'air-horn'){
      hornImg.src = "assets/images/air-horn.svg";
      hornAudio.src = "assets/audio/air-horn.mp3";
    } else if(event.target.value === 'car-horn'){
      hornImg.src = "assets/images/car-horn.svg";
      hornAudio.src = "assets/audio/car-horn.mp3";
    } else if(event.target.value === 'party-horn'){
      hornImg.src = "assets/images/party-horn.svg";
      hornAudio.src = "assets/audio/party-horn.mp3";
    }
  }); 

  const soundButton = document.querySelector('button');
  const soundVolume = document.querySelector('input');
  const volumeImg = document.querySelector('#volume-controls img');

  soundVolume.addEventListener('input', function(event){
    const currVolume = event.target.value;
    hornAudio.volume = currVolume * 0.01;
    if(currVolume == 0){
      volumeImg.src = "assets/icons/volume-level-0.svg";
    } else if (currVolume > 0 && currVolume < 33){
      volumeImg.src = "assets/icons/volume-level-1.svg";
    } else if (currVolume >= 33 && currVolume < 67){
      volumeImg.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
  });

  const jsConfetti = new JSConfetti();

  soundButton.addEventListener('click', function(){
    hornAudio.play();
    if(selectElement.value === 'party-horn'){
      jsConfetti.addConfetti();
    }
  });
}