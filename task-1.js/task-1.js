const quantityEl = document.querySelectorAll('.item')
console.log(`В списке ${quantityEl.length} категории`)
let items = document.querySelectorAll('.item')
;[...items].forEach(item => {
  console.log(
    `категория: '${item.firstElementChild.textContent}'   количество элементов: ${item.lastElementChild.children.length}`,
  )
})
const totalEl = document.querySelector('#categories')
