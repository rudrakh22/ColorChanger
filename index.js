const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e);
        if(e.target.id){
            body.style.backgroundColor=e.target.id;
        }
    });
})