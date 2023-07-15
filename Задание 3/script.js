
let btn = document.querySelector('.btn')
let resultImg = document.querySelector('.result')
btn.addEventListener('click', () => {
   let value = document.querySelector('.inp').value
   if (value < 1 || value > 10) alert('Число вне диапазона от 1 до 10')
   else getXhr(`http://picsum.photos/v2/list?limit=${value}`, getImage)
})

function getXhr(url, callback) {
   const xhr = new XMLHttpRequest()
   xhr.open("GET", url)
   xhr.onload=function(){
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
}
