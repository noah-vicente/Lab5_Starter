// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector('select');
  let voices = [];

  synth.addEventListener('voiceschanged', function(){
    voices = synth.getVoices();
    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);

      voiceSelect.appendChild(option);
    }
  });

  let textContent = "";
  const textElement = document.querySelector('textarea');
  textElement.addEventListener('change', function(event){
    textContent = event.target.value;
  });
  
  const buttonElement = document.querySelector("button");
  const faceImg = document.querySelector('img');

  buttonElement.addEventListener('click', function(){
    const utterance = new SpeechSynthesisUtterance(textContent);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterance.voice = voice;
      }
    }

    utterance.addEventListener('start', function(){
      faceImg.src = "assets/images/smiling-open.png";
    });

    utterance.addEventListener('end', function(){
      faceImg.src = "assets/images/smiling.png";
    });

    synth.speak(utterance);
  });

}