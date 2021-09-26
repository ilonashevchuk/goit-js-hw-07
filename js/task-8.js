const controls = {
  inputNumber: document.querySelector('[type="number"]'),
  buttonRender: document.querySelector('[data-action="render"]'),
  buttonDestroy: document.querySelector('[data-action="destroy"]'),
}
const boxes = document.querySelector('#boxes')

function getAmount() {
  const amount = Number(controls.inputNumber.value)
  createBoxes(amount)
}
function random() {
  return Math.floor(Math.random() * 256)
}
function createBoxes(amount) {
  let startlSize = 30
  if (boxes.children.length > 0) {
    destroyBoxes()
  }
  if (!boxes.children.length) {
    for (let i = 0; i < amount; i++) {
      startlSize += 10
      const newDiv = `<div style="width: ${startlSize}px; 
        height: ${startlSize}px; background-color: rgb(${random()}, 
        ${random()}, ${random()})"></div>`
      boxes.insertAdjacentHTML('beforeend', newDiv)
    }
  }
}

function destroyBoxes() {
  boxes.innerHTML = ''
}
controls.buttonRender.addEventListener('click', getAmount)
controls.buttonDestroy.addEventListener('click', destroyBoxes)
