const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы']
function createLi(array, id) {
  const ingredientsEl = document.querySelector(id)
  const ingredientEl = array.map(item => {
    const itemEl = document.createElement('li')
    itemEl.textContent = item
    return itemEl
  })
  ingredientsEl.append(...ingredientEl)
}
createLi(ingredients, '#ingredients')
