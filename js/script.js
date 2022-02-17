const income = document.getElementById('income-input');
const food = document.getElementById('food-input');
const rent = document.getElementById('rent-input');
const cloths = document.getElementById('cloths-input');

const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');

// -----calculation Function----
function expensesCalculation() {
    const incomeMoney = Number(income.value);
    const foodMoney = Number(food.value);
    const rentMoney = Number(rent.value);
    const clothsMoney = Number(cloths.value);
    const totalMoneyExpenses = foodMoney + rentMoney + clothsMoney;
    const remaining = incomeMoney - totalMoneyExpenses;


    // validation 
    if (typeof (incomeMoney) != 'number'  ||  typeof (foodMoney) != 'number' || typeof (rentMoney) != 'number' || typeof (clothsMoney) != 'number') {
        alert('This is Not a number, Insert Valid Numbers Only');
    }
    if(0 > incomeMoney || 0 > foodMoney || 0 > rentMoney || 0 > incomeMoney){
        alert('This value is Negative, Insert Positive Number Only');
    }
    else {
        totalExpenses.innerText = totalMoneyExpenses;
        balance.innerText = remaining;
    }



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

const saveInput = document.getElementById('save-input');
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');

function savings() {
    const presentBalance = Number(income.value);
    const savingsPercentage = Number(saveInput.value);
    const savings = (presentBalance * savingsPercentage) / 100;

    savingAmount.innerText = savings;
    const updateBalance = Number(income.value - (Number(balance.innerText) + savings))
    //---------------Validation-----------
    if (typeof (savingsPercentage) != 'number') {
        alert("Enter Valid Number");
    }
    else if (0 > updateBalance) {
        alert('You Have Insufficient Balance to Save, Earn more or be economical');
    }
    else if (updateBalance < Number(income.value)) {
        remainingBalance.innerText = updateBalance;
    }
    else if (updateBalance > Number(income.value)) {
        alert('You Have Insufficient Balance to Save');
    }
    else {
        remainingBalance.innerText = updateBalance;
    }

    // console.log(presentBalance, savingsPercentage, savingAmount, savings)
}

