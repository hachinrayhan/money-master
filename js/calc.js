document.getElementById('btn-calculate').addEventListener('click', function () {
    const monthlyIncome = getInputValue('income');
    const foodCost = getInputValue('food');
    const rentCost = getInputValue('rent');
    const clothesCost = getInputValue('clothes');
    if (isNaN(monthlyIncome) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)) {
        alert('Please give a valid number.')
        return;
    }

    const totalExp = foodCost + rentCost + clothesCost;
    const balance = monthlyIncome - totalExp;

    setValue('total-exp', totalExp);
    setValue('balance', balance);
})

document.getElementById('btn-save').addEventListener('click', function () {
    const monthlyIncome = getInputValue('income');
    const saving = getInputValue('save');
    const savingAmount = (monthlyIncome * saving) / 100;
    const balanceString = document.getElementById('balance').innerText;
    const balance = parseInt(balanceString);
    const remainingBalance = balance - savingAmount;
    if (savingAmount > balance) {
        alert("You don't have enough money to save.")
        return;
    }

    setValue('saving-amount', savingAmount);
    setValue('remaining-balance', remainingBalance);
})