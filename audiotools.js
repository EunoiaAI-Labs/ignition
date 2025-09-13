function newSpeech() {
  new SpeechRecognition()
}
function startSpeech() {
  start()
}
function toEnglish() {
  recognition.lang = "en-US";
}
function talkNow(synthesis) {
  const synth = window.speechSynthesis;
  const activate = new SpeechSynthesisUtterance(
    synthesis,
  );
}
function audparams(temp) {
  if (y === undefined) {
    y = temp;
  }
}
