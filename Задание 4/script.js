let btn = document.querySelector('.btn')
let text = document.querySelector('.text')
let resultImg = document.querySelector('.resultImg')

btn.addEventListener('click', () => {
   let one = document.querySelector('.one_enter').value
   let two = document.querySelector('.two_enter').value
   if ((one < 100 || one > 300) || (two < 100 || two > 300)) text.innerHTML = "Одно из чисел вне диапазона"
   else {
      fetch('https://images.unsplash.com/photo-1682685797795-5640f369a70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60')
         // `https://picsum.photos/${one}/${two}`
         .then((response) => {
            resultImg.innerHTML = response.url

         })

         .catch(() => {
            console.log('Что-то пошло не так')
         })
   }
})