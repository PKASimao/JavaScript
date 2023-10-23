
const buttonSelect = document.querySelectorAll('div ul li .color')

buttonSelect.forEach(buttom =>{

    buttom.addEventListener('click', button=>{
        
        buttom.classList.add('selected')

    })

})




