const button = document.querySelector('button')!; // the exclamation mark assures typescript the button exists

button.addEventListener('click', () => {
  console.log('Clicked!');
});

const map = new Map();