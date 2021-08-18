function updateProductNumber(product, isIncreasing, price) {
    const productInput = document.getElementById(product + '-number')
    const productText = productInput.value;
    const productNumber = parseInt(productText)
    let updateValue = ''
    if (isIncreasing == true) {
        updateValue = productInput.value = productNumber + 1;
    } else if (productNumber > 0) {
        updateValue = productInput.value = productNumber - 1;
    }

    const productTotals = document.getElementById(product + '-Total')

    productTotals.innerText = updateValue * price

    //calculate total
    calculateTotal()








    // if (isPhone == true) {

    //     phoneTotals.innerText = updateValue * 1219
    // }
    // else {
    //     caseTotals.innerText = updateValue * 59
    // }


}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value)

    return productNumber;
}

function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal
    const tax = subTotal / 10
    const totalPrice = subTotal + tax

    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-price').innerText = totalPrice
}





document.getElementById('case-plus').addEventListener('click', function () {

    updateProductNumber('case', true, 59);



})

document.getElementById('case-minus').addEventListener('click', function () {


    updateProductNumber('case', false, 59)


})


document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 1259)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1259)
})