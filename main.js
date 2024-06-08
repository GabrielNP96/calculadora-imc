const btnSend = document.querySelector('#btn-send')

function stringToNumber(numericString) {
    let userNum = numericString
        userNum = userNum.replace(/\,/g, '.')
    return userNum = Number(userNum)
}
function imcResult(imc) {
    let answer = document.querySelector('#answer')

    if(imc < 18.5 ) {
        return answer.innerHTML = `Seu imc é <span class="red">${imc}</span> e você está abaixo do peso.`;
    } else if(imc > 18.6 && imc < 24.9 ) {
        return answer.innerHTML = `Seu imc é <span class="green">${imc}</span> e você está no peso ideal.`;
    } else if(imc > 25.0 && imc < 29.9) {
        return answer.innerHTML = `Seu imc é <span class="orange">${imc}</span> e você está levemente acima do peso.`;
    } else if(imc > 30.0 && imc < 34.9) {
        return answer.innerHTML = `Seu imc é <span class="red">${imc}</span> e você está com grau I de obesidade.`;
    } else if(imc > 35.0 && imc < 39.9) {
        return answer.innerHTML = `Seu imc é <span class="red">${imc}</span> e você está com grau II de obesidade.`;
    } else if (imc > 40.0) {
        return answer.innerHTML = `Seu imc é <span class="red">${imc}</span> e você está com grau III de obesidade.`;
    } else {
        return answer.innerHTML = '<span class="red">Erro...</span>'
    }

}

 
btnSend.addEventListener('click', () => {
    let weight = document.querySelector('#weight').value
    let height = document.querySelector('#height').value

    weight = stringToNumber(weight)
    height = stringToNumber(height)

    let imc = weight / (height ** 2)
        imc = imc.toFixed(2)

    let userImc = imcResult(imc)
    showInHtml(userImc)
})


