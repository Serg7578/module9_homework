let btn = document.querySelector('.btn')
let text = document.querySelector('.text')
let resultImg = document.querySelector('.resultImg')
let memoryCard = []
btn.addEventListener('click', () => {
   let one = document.querySelector('.one_enter').value
   let two = document.querySelector('.two_enter').value
   if ((one < 1 || one > 10 || !isNumeric(one)) && (two < 1 || two > 10 || !isNumeric(two))) text.innerHTML = "Номер страницы  и лимит вне диапазона от 1 до 10"
   else if (one < 1 || one > 10 || !isNumeric(one)) text.innerHTML = "Номер страницы вне диапазона от 1 до 10"
   else if (two < 1 || two > 10 || !isNumeric(two)) text.innerHTML = "Лимит вне диапазона от 1 до 10"
   else getXhr(`https:picsum.photos/v2/list?page=${one}&limit=${two}`, getImage)
})

function getXhr(url, callback) {
   const xhr = new XMLHttpRequest()
   xhr.open("GET", url)
   xhr.onload = function () {
      const result = JSON.parse(xhr.response)
      callback(result)
   }
   xhr.send()
}

function getImage(arr) {
   let cards = ''
   arr.forEach(element => {
      const blockImage =
         `<div class="card">
         <img src="${element.download_url}" class="card-image"/>
         </div>`
      cards = cards + blockImage
   })
   resultImg.innerHTML = cards
   memoryCard = cards
   localStorage.setItem('reload', memoryCard)
}

function isNumeric(n) {
   return !isNaN(parseFloat(n)) && isFinite(n)
}
window.addEventListener('DOMContentLoaded', () => {
   resultImg.innerHTML = localStorage.getItem('reload')
})