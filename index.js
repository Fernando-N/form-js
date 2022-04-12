const form = document.querySelector('form')
const input = document.querySelectorAll('.required')
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
  })
})

input.forEach(function (item) {
  item.addEventListener('input', validate)
})
