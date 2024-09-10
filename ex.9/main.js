
let icon = document.querySelector('.icon')
openIt = ()=>{
    if(icon.classList.contains('close')){
        icon.classList.remove('close')
        icon.classList.add('open');
    } else if(icon.classList.contains('open')){
        icon.classList.remove('open');
        icon.classList.add('close');
    }
}