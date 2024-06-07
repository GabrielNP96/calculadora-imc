import { convertToNumber } from "./modules/convertToNumber.js";

const btnSend = document.querySelector('#btn-send')

btnSend.addEventListener('click', () => {
    let weight = document.querySelector('#weight').value
        weight = weight.replace(/\,/g, '.')
    let height = document.querySelector('#height').value
        height = height.replace(/\,/g, '.')

    userData = convertToNumber(weight, height)//retorna um array na mesma ordem com as strings convertidas em números



    

    console.log(typeof(userData[0]))
    console.log(typeof(userData[1]))
})


