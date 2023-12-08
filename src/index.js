import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textArea = document.querySelector("textarea");
const showWords = document.querySelector("li[data-testid='word-count']");
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
  showWords.textContent = analyzer.getWordCount(text);
  showCharacters.textContent = analyzer.getCharacterCount(text);
  showNumbers.textContent = analyzer.getNumberCount(text);
  showNumberSum.textContent = analyzer.getNumberSum(text);
  showAvgL.textContent = analyzer.getAverageWordLength(text);
  showCharactersWithoutS.textContent =
    analyzer.getCharacterCountExcludingSpaces(text);
}

function resetValue() {
  textArea.value = "";
  showWords.textContent = 0;
  showCharacters.textContent = 0;
  showNumbers.textContent = 0;
  showNumberSum.textContent = 0;
  showAvgL.textContent = 0;
  showCharactersWithoutS.textContent = 0;
}
