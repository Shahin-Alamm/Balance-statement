
const input = document.getElementById('income')
const food = document.getElementById('food')
const cloths = document.getElementById('cloths')
const rent = document.getElementById('rent')

const addButton = document.getElementById('addBtn');

addButton.addEventListener('click',function(){
const inputBalance = parseFloat(input.value) //ata must sobar upore dite hobe 
const balance = document.getElementById('balance');

    const foodInput = parseFloat(food.value)
    const clothInput = parseFloat(cloths.value)
    const rentInput = parseFloat(rent.value)

    const totalExpense = foodInput + clothInput + rentInput;
    document.getElementById("expense-balance").innerText = totalExpense

    const totalBalance = inputBalance - totalExpense;
    balance.innerText = totalBalance;

    const saving = document.getElementById('saving-amount')
    const newSaving = parseFloat(saving.value)
    const savingAmount = (newSaving/100 ) * totalBalance;
    // document.getElementById("saving-amount").innerText = savingAmount;

    document.getElementById("remain-balance").innerText = savingAmount;
})




// let a = 10000;
// if(a<20000){
//     document.getElementById('error-msg').classList.remove('d-none')
// }
