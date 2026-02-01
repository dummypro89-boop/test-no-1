const lottoNumbersContainer = document.getElementById('lotto-numbers');
const generateButton = document.getElementById('generate-button');

function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

function displayLottoNumbers(numbers) {
  lottoNumbersContainer.innerHTML = '';
  for (const number of numbers) {
    const numberElement = document.createElement('div');
    numberElement.classList.add('lotto-number');
    numberElement.textContent = number;
    lottoNumbersContainer.appendChild(numberElement);
  }
}

function generateAndDisplayNumbers() {
    const newNumbers = generateLottoNumbers();
    displayLottoNumbers(newNumbers);
}

generateButton.addEventListener('click', generateAndDisplayNumbers);

// Initial generation
generateAndDisplayNumbers();
