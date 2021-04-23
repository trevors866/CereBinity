const bubbles = [...document.getElementsByClassName('bubble')];
bubbles.forEach((element) => (element.onclick = () => popped(element)));

function popped(element) {
  element.style.background = '#3b3b3b';
  console.log('popped');
}

document.getElementById('unpop').onclick = refreshBubbles;

function refreshBubbles() {
  bubbles.forEach((element) => (element.style.background = '#cec8ff'));
}
