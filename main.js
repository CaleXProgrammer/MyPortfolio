let i = document.querySelector('.fa-bars')
const onOff = () => {
    let nav = document.querySelector('#bar');

    
    if (nav.style.display == 'none'){
        nav.style.display = 'flex';
    } else {
        nav.style.display =  'none';
    }
}
i.addEventListener('click', onOff)

    // nav.classList.toggle('open');


