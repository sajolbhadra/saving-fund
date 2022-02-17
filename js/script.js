const income = document.getElementById('income-input');
const food = document.getElementById('food-input');
const rent = document.getElementById('rent-input');
const cloths = document.getElementById('cloths-input');



const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');



// --------------Calculate Button Handler----------------





// -----calculation Function----
function expensesCalculation() {
    const incomeMoney = Number(income.value);
    const foodMoney = Number(food.value);
    const rentMoney = Number(rent.value);
    const clothsMoney = Number(cloths.value);
    const totalMoneyExpenses = foodMoney + rentMoney + clothsMoney;
    const remaining = incomeMoney - totalMoneyExpenses;

    totalExpenses.innerText = totalMoneyExpenses;
    balance.innerText = remaining;

/*     if (remaining > incomeMoney) {
        alert('your Expenses is Greater than Your Income, Earn more or be economical')
    }
    if(totalMoneyExpenses > balance){
        alert('your Expenses is Greater than Your Income, Earn more or be economical')
    }
    if(balance < 0){
        alert('your Expenses is Greater than Your Income, Earn more or be economical')
        return console.log('hi hi');
    }
    else if ( balance > 0) {
        totalExpenses.innerText = totalMoneyExpenses;
        balance.innerText = remaining;
        console.log('hi hi');
    }
 */

}

const savingInput = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');