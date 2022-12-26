const btn = document.querySelector(".btn")
const firstInput = document.querySelector(".input-one")
const secondInput = document.querySelector(".input-two")
const text = document.querySelector(".text")
const img = document.querySelector(".img")
const resultNode = document.querySelector(".result")

if (localStorage.getItem('cards') != undefined) {
    resultNode.innerHTML = localStorage.getItem('cards')
}

btn.addEventListener('click', async () => {
    let firstValue = +firstInput.value
    let secondValue = +secondInput.value
    if (!(firstValue >= 1 && firstValue <= 10) && !(secondValue >= 1 && secondValue <= 10)) {
        text.textContent = 'Число вне диапазона от 1 до 10'
    } else {
        await useRequest(firstValue, secondValue, displayResult)
    }

})

function useRequest (page, limit, cb) {
    var xhr = new XMLHttpRequest()
    let response
    xhr.open('GET', 'https://picsum.photos/v2/list?page=' + page + '&limit=' + limit)
    xhr.onload = function () {
        response = JSON.parse(xhr.response)
        if(cb) {
            cb(response)
        }
    }
    xhr.send()
}

function displayResult(data) {
    let cards = '';
    
    data.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
        </div>
      `;
      cards = cards + cardBlock;
    })
    resultNode.innerHTML = cards
    localStorage.setItem('cards', cards)   
}