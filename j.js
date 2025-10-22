const typedText = document.getElementById('typed-text');
const lines = [
  'const behzad = "Web Developer";',
  'console.log("Hello World!");',
  'Made with 💜 using HTML & CSS & js'
];
let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentText = lines[lineIndex];
  
  if (isDeleting) {
    typedText.textContent = currentText.substring(0, charIndex--);
  } else {
    typedText.textContent = currentText.substring(0, charIndex++);
  }

  let delay = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    delay = 1000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    lineIndex = (lineIndex + 1) % lines.length;
    delay = 500;
  }

  setTimeout(typeLoop, delay);
}


document.addEventListener('DOMContentLoaded', typeLoop);
