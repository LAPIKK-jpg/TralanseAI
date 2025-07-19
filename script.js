function processText() {
  const input = document.getElementById("userInput").value;

  // Soxta "to‘g‘rilash" va "tarjima"
  const fixed = fakeCorrect(input);
  const translation = fakeTranslate(fixed);

  document.getElementById("fixedText").innerText = fixed;
  document.getElementById("translation").innerText = translation;

  // Ovoz chiqarish
  const utter = new SpeechSynthesisUtterance(translation);
  utter.lang = "uz-UZ";
  speechSynthesis.speak(utter);
}

// Soxta "AI" to‘g‘rilash
function fakeCorrect(text) {
  if (text.toLowerCase().includes("goed")) {
    return text.replace("goed", "went");
  }
  return text;
}

// Soxta tarjima
function fakeTranslate(text) {
  if (text.toLowerCase().includes("went to school")) {
    return "U maktabga bordi";
  }
  return "Tarjima tayyor!";
}
