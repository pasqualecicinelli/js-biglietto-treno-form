const nameSurname = document.getElementById('input-name');

const km = document.getElementById('input-km');

const age = document.getElementById('age-input');

const buttonSend = document.getElementById('send');

const printInput = document.getElementById('print');


buttonSend.addEventListener('click', function () {

    const inputName = nameSurname.value;
    console.log(nameSurname.value);
    console.log(km.value);
    console.log(age.value);
    console.log(inputName);

    printInput.innerHTML = inputName;

    const price = (km.value * 0.21);
    console.log(price);

    if (age.value == 'min') {

        const discount = (price * 0.2);
        console.log(discount);

        const priceMin = (price - discount);
        console.log(priceMin);

        
        printInput.innerHTML = priceMin.toFixed(2);
        
    } else if (age.value == 'over') {

        const discount = (price * 0.4);
        console.log(discount);
        const priceOver = (price - discount);
        console.log(priceOver);
        printInput.innerHTML = priceOver.toFixed(2);

    }

    else {

        console.log(price);
        printInput.innerHTML = price.toFixed(2);
    }
})