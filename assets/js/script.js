window.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.main__btn');
    document.addEventListener('click', function(e){
        const targetElement = e.target.closest('.main__btn') || e.target.closest('.main');
        if(targetElement.classList.contains('main__btn')){
            const btnMinus = targetElement.querySelector('.main__minus'),
                 btnPlus = targetElement.querySelector('.main__plus');
                btnMinus.classList.toggle('hidden');
                btnPlus.classList.toggle('hidden');
        } else if (targetElement.classList.contains('main')){
            btns.forEach(btn => {
                const btnMinus = btn.querySelector('.main__minus'),
                btnPlus = btn.querySelector('.main__plus');
                btnMinus.classList.add('hidden');
                btnPlus.classList.remove('hidden');
            })
        }
    })    
});
