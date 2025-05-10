const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const theirName = document.querySelector('.name');

noButton.addEventListener('click', () => {
  // Get the current width and height
  let currentWidth = parseFloat(getComputedStyle(yesButton).width);
  let currentHeight = parseFloat(getComputedStyle(yesButton).height);

  // Double the width and height
  yesButton.style.width = `${currentWidth * 2}px`;
  yesButton.style.height = `${currentHeight * 2}px`;
});

yesButton.addEventListener('click', ()=>{
  theirName.innerText = "Thank you";
  
})