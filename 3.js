const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
const text = document.querySelector(".text")
const img = document.querySelector(".img")
const resultNode = document.querySelector(".result")
btn.addEventListener('click', () => {
    let value = +input.value
    if (!(value >= 1 && value <= 10)) {
        text.textContent = 'Число вне диапазона от 1 до 10'
    } else {
        useRequest(value, displayResult)
    }

})

function useRequest(value, callback) {
    var xhr = new XMLHttpRequest()
    let response
    xhr.open('GET', 'https://picsum.photos/v2/list?limit='+ value)
    xhr.onload = function () {
        response = JSON.parse(xhr.response)
        if(callback) {
            callback(response)
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
}