
const input = document.getElementById('income')
const food = document.getElementById('food')
const cloths = document.getElementById('cloths')
const rent = document.getElementById('rent')

const addButton = document.getElementById('addBtn');

addButton.addEventListener('click',function(){
const inputBalance = parseFloat(input.value) //ata must sobar upore dite hobe ;
const foodInput = parseFloat(food.value)
const clothInput = parseFloat(cloths.value)
const rentInput = parseFloat(rent.value)

if(isNaN(inputBalance) || isNaN(foodInput) || isNaN(clothInput) || isNaN(rentInput)){
    alert('Please input number')
    return;
}
// or mane jkno ekta vul holei alert dibe
//and mane sob gulo vul holei alert dibe

if(inputBalance < 0 || foodInput < 0 ||clothInput< 0 ||rentInput<0 ){
    alert('Negetive value please input positive value')
}
const balance = document.getElementById('balance');
  

    const totalExpense = foodInput + clothInput + rentInput;
    if(inputBalance < totalExpense){
        alert('expense much')
    }
    document.getElementById("expense-balance").innerText = totalExpense

    const totalBalance = inputBalance - totalExpense;
    balance.innerText = totalBalance;

    const saving = document.getElementById('saving-amount')
    const newSaving = parseFloat(saving.value)
    const savingAmount = (newSaving/100 ) * totalBalance;
    // document.getElementById("saving-amount").innerText = savingAmount;

    document.getElementById("remain-balance").innerText = savingAmount;
})


