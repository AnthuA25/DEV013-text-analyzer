import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textArea = document.querySelector("textarea");
const showWords = document.querySelector("li[data-testid='word-count']");
console.log(showWords)
const showCharacters = document.querySelector(
  "li[data-testid='character-count']"
);
const showNumbers = document.querySelector("li[data-testid='number-count']");
const showNumberSum = document.querySelector("li[data-testid='number-sum']");
const showAvgL = document.querySelector(
  "li[data-testid='word-length-average']"
);
const showCharactersWithoutS = document.querySelector(
  "li[data-testid='character-no-spaces-count'"
);
const btnReset = document.getElementById("reset-button");

textArea.addEventListener("input", showText);
btnReset.addEventListener("click", resetValue);

function showText() {
  const text = textArea.value;
  showCharacters.innerHTML = `Caracteres<br> ${analyzer.getCharacterCount(text)}`;
  showWords.innerHTML = `Palabras<br> ${analyzer.getWordCount(text)}`;
  showCharactersWithoutS.innerHTML = `Caracteres Sin Espacios <br>${analyzer.getCharacterCountExcludingSpaces(text)}`;
  showAvgL.innerHTML = `Promedio de longitud <br>${analyzer.getAverageWordLength(text)}`;
  showNumberSum.innerHTML = `Suma de Números <br>${analyzer.getNumberSum(text)}`;
  showNumbers.innerHTML = `Números <br>${analyzer.getNumberCount(text)}`;
}

function resetValue() {
  textArea.value = "";
  showWords.innerHTML = `Palabras <br>${0}`;
  showCharacters.innerHTML = `Caracteres<br> ${0}`;
  showCharactersWithoutS.innerHTML = `Caracteres Sin Espacios <br>${0}`;
  showNumbers.innerHTML = `Números <br>${0}`;
  showNumberSum.innerHTML = `Suma de Números <br>${0}`;
  showAvgL.innerHTML = `Promedio de longitud <br>${0}`;
}


