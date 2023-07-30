const readline = require('readline');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptInput(promptText) {
  return new Promise((resolve) => {
    rl.question(promptText, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function getUserInput() {
  const text = await promptInput('Enter up to three characters: ');
  const textColor = await promptInput('Enter text color (keyword or hex code): ');
  const shapeOptions = ['circle', 'triangle', 'square'];
  const shape = await promptInput(`Choose a shape (${shapeOptions.join(', ')}): `);
  const shapeColor = await promptInput('Enter shape color (keyword or hex code): ');

  return { text, textColor, shape, shapeColor };
}

function generateSVG(userInput) {
  let shapeElement;
  switch (userInput.shape) {
    case 'circle':
      shapeElement = new Circle(150, 100, 50, userInput.shapeColor);
      break;
    case 'triangle':
      shapeElement = new Triangle(75, 20, 140, 160, 20, 160, userInput.shapeColor);
      break;
    case 'square':
      shapeElement = new Square(100, 50, 100, userInput.shapeColor);
      break;
    default:
      throw new Error('Invalid shape selected.');
  }

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="20" y="30" fill="${userInput.textColor}">${userInput.text}</text>
      ${shapeElement.getSVG()}
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent);
}

(async function () {
  try {
    const userInput = await getUserInput();
    generateSVG(userInput);
    console.log('Generated logo.svg');
    rl.close();
  } catch (error) {
    console.error('Error:', error.message);
    rl.close();
  }
})();
