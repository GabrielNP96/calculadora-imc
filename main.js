const btnSend = document.querySelector('#btn-send')
 
btnSend.addEventListener('click', () => {
    let weight = document.querySelector('#weight').value
    let height = document.querySelector('#height').value
        weight = weight.replace(/\,/g, '.')
        height = height.replace(/\,/g, '.')
        weight = Number(weight)
        height = Number(height)

    console.log(weight, height)

})


