const nameSurname = document.getElementById('input-name');

const km = document.getElementById('input-km');

const age = document.getElementById('age-input');

const buttonSend = document.getElementById('send');

const printName = document.getElementById('print-name');
const printDiscount = document.getElementById('print-discount');
const printPrice = document.getElementById('print-price');


buttonSend.addEventListener('click', function () {

    const inputName = nameSurname.value;
    console.log(nameSurname.value);
    console.log(km.value);
    console.log(age.value);
    console.log(inputName);

    const price = (km.value * 0.21);
    console.log(price);

    if (age.value == 'min') {

        const discount = (price * 0.2);
        console.log(discount);

        const priceMin = (price - discount);
        console.log(priceMin);

        printName.innerHTML = nameSurname.value;
        printDiscount.innerHTML = discount.toFixed(2) + '€' + ' E\' stato applicato il 20% di sconto';
        printPrice.innerHTML = priceMin.toFixed(2) + '€';

    } else if (age.value == 'over') {

        const discount = (price * 0.4);
        console.log(discount);
        const priceOver = (price - discount);
        console.log(priceOver);

        printName.innerHTML = nameSurname.value;
        printDiscount.innerHTML = discount.toFixed(2) + '€' + ' E\' stato applicato il 40% di sconto';
        printPrice.innerHTML = priceOver.toFixed(2) + '€';

    }

    else {

        console.log(price);
        printName.innerHTML = nameSurname.value;
        printDiscount.innerHTML = 'Biglietto base';
        printPrice.innerHTML = price.toFixed(2) + '€';
    }

    nameSurname.value = '';
    km.value = '';
    age.value = '';

})