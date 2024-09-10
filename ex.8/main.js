let btn = document.querySelector('button');
let btnText = document.querySelector('button .text')

onSubmit = function(e) {
    btn.classList.add('loading');
    setTimeout(()=>{
        btn.classList.remove('loading');
        btn.classList.add('success');
        btnText.innerHTML = 'Successful Login';
    },4000)
}