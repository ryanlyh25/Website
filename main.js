const myForm=document.querySelector('.my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const commentInput=document.querySelector('#com');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users')

myForm.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
if(nameInput.value===''||emailInput.value==='' || commentInput.value===''){
    //alert('Please Enyter fields');
    msg.innerHTML='Please enter all fields';
    msg.classList.add('error');
    

    setTimeout(()=>msg.remove(),3000);
}else{
    console.log('success');}
}