document.getElementById('submit-btn').addEventListener('click', function(){
    const depositFild = document.getElementById('deposit-fild');
    const newdepositAmountString = depositFild.value;
    const newdepositAmount = parseFloat(newdepositAmountString);


    const depositTotalTaka = document.getElementById('deposit-total');
    const prvdepositTotalString = depositTotalTaka.innerText;
    const prvdepositTotal = parseFloat(prvdepositTotalString);
     

    const currentDepositamount = prvdepositTotal + newdepositAmount;
    depositTotalTaka.innerText = currentDepositamount;


// ***********

    const balanceTotalElement = document.getElementById("blance-total");
    const prvdepositBalanceTotalString = balanceTotalElement.innerText;
    const prvdepositBalanceTotal =parseFloat(prvdepositBalanceTotalString);

    
    const cueerentBalanceTotal = prvdepositBalanceTotal + newdepositAmount;
    balanceTotalElement.innerText = cueerentBalanceTotal;
    
   
  
    depositFild.value = " ";
})