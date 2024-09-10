let lis = document.querySelectorAll('.w-content');

lis.forEach((li)=>{
    li.addEventListener('click', ()=>{
        lis.forEach((li)=>{
            li.classList.remove('active');
        })
        li.classList.add('active');
    });
})