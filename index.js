const form = document.querySelector('form')
const input = document.querySelectorAll('input')
const textArea = document.querySelector('textarea')

function validate(e) {
  e.target.style.border = '1px solid green'
  e.target.classList.remove('active')
  e.target.nextElementSibling.style.display = 'none'
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  input.forEach(function (item) {
    if (item.value) {
      item.style.border = '1px solid green'

      item.classList.remove('active')
    } else {
      item.style.border = '1px solid red'
      item.classList.add('active')
      item.nextElementSibling.style.display = 'block'
    }
    if (textArea.value) {
      textArea.style.border = '1px solid green'
      textArea.classList.remove('active')
      console.log('aaaaaaaaaaaaa')
    } else {
      textArea.style.border = '1px solid red'
      textArea.nextElementSibling.style.display = 'block'
      textArea.classList.add('active')
    }
  })
})

input.forEach(function (item) {
  item.addEventListener('input', validate)
})

textArea.addEventListener('input', validate)
