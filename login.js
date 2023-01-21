// 


// *
document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

  const passwordFiel = document.getElementById('user-password');
  const password = passwordFiel.value;  
//   console.log(email,password);

if(email === 'joita@gmail.com' && password ==='joita'){
    window.location = 'bank.html';
}
else{
   alert('You are wourng !!')
}

})