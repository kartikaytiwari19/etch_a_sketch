const btn=document.querySelector('.btn'); /*Reset Grid Button*/
btn.textContent="Clear Grid";
btn.addEventListener('click',() => {
    const reset=document.querySelectorAll('div');
    reset.forEach((div)=>{
        if(div.className=='square'){
            div.style.backgroundColor="white";
        }
    })
});

const container=document.querySelector('.container');
for(let i=0;i<16;i++) /*Make Grid*/
{
    for(let j=0;j<16;j++)
    {
        let square=document.createElement('div');
        square.className='square';
        square.textContent="h";
        container.appendChild(square);
    }
}
const sq=document.querySelectorAll('div'); /*Add Event Listener*/
sq.forEach((div) => {
    div.addEventListener('mouseenter',()=>{
        if(div.className=='square'){
        div.style.backgroundColor="black";}}
    );
}

);