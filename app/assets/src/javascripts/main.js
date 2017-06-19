var p = document.createElement('p')
p.style.color = 'green'
p.textContent = 'JavaScript is running'
document.body.appendChild(p)

var jsNotLoaded = document.querySelector('.js-not-loaded')
jsNotLoaded.parentNode.removeChild(jsNotLoaded)
