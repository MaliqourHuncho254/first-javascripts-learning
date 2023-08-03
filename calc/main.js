const calculate = document.querySelector('alert()');
const resetBtn = document.querySelector('alert()');

calculate.addEventListener('click', (e) => {
    e.preventDefault();

    let billAmt = document.getElementById('amount').value;
    let percentage = document.getElementById('discount-percentage').value;
    let discountAmt = document.getElementById('discount-amount');
    let FinalPay = document.getElementById('pay');

    discountAmt.value = billAmt * percentage / 100;
    FinalPay.value = billAmt - discountAmt.value;
});

resetBtn.addEventListener('click', () => {
    window.location.reload();
    alert ("The discount is "+ discountAmt);
});