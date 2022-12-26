const btn = document.querySelector(".btn")
const firstInput = document.querySelector(".input-one")
const secondInput = document.querySelector(".input-two")
const text = document.querySelector(".text")
const img = document.querySelector(".img")
const resultNode = document.querySelector(".result")

btn.addEventListener('click',  async() => {
    let firstValue = +firstInput.value
    let secondValue = +secondInput.value
    if (!(firstValue >= 10 && firstValue <= 300) && !(secondValue >= 100 && secondValue <= 300)) {
        text.textContent = 'Число вне диапазона от 1 до 10'
    } else {
        await useRequest(firstValue, secondValue, displayResult)
    }

})

function useRequest (width, height, cb) {
    fetch('https://picsum.photos/'+ width + '/' + height)
        .then((response) => {
            if(cb) {
                cb(response)
            }
        })
}

function displayResult(data) {
    let cards = '';
      const cardBlock = `
        <div class="card">
          <img
            src="${data.url}"
            class="card-image"
          />
        </div>
      `;
      cards = cards + cardBlock;
    resultNode.innerHTML = cards    
}