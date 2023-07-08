// //single element 
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('my-form'));
// //multiple element
// console.log(document.querySelector('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items=document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

//  const ul=document.querySelector('.items');
// // // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent='hello';
// //to access child node
// ul.children[1].innerText='sakthi';
// ul.lastElementChild.textContent='ganesh';

// //change style of the element

// const btn=document.querySelector('.btn');
// btn.style.background='red';
// //Eventlistenner
// btn.addEventListener('click',(e)=>{
//     // e.preventDefault();
//     btn.style.background='blue';

// })

const myform=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');

const userlist=document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value=== '' || emailInput.value=== '' ){
        msg.innerHTML='pls enter values'
    }else{
        console.log("success");
    }

}


