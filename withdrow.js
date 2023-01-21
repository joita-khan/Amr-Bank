document.getElementById('withdrow-btn').addEventListener('click', function(){
    const withdrowFeild = document.getElementById('withdrow-feild');
    const newWithdrowAmountString = withdrowFeild.value;
    const newdepositAmount = parseFloat(newWithdrowAmountString);

    const withdrowTotalElement = document.getElementById('withdrow-total');
    const prvwithdrowTotalString = withdrowTotalElement.innerText;
    const prvWithdrowBalanceTotal = parseFloat(prvwithdrowTotalString);

    const currentwithdrowTotalElement = prvWithdrowBalanceTotal + newdepositAmount;
    withdrowTotalElement.innerText = currentwithdrowTotalElement;


    
    // ********
    


    const balanceTotalElement = document.getElementById("blance-total");
    const prvwithdrowBalanceTotalString = balanceTotalElement.innerText;
    const pevwithdrowBalanceTotal = parseFloat(prvwithdrowBalanceTotalString);

    const newBalanceTotal = pevwithdrowBalanceTotal - newdepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrowFeild.value = " ";
})