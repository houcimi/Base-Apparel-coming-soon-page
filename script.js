const btn = document.querySelector('.btn')
const field = document.getElementById('email')
const parrentdiv = document.querySelector('.emailfield')
const img = document.getElementById('error')
const msgerror = document.getElementById('error-msg')

btn.addEventListener('click' ,() => {
    const email = field.value
    if(!email.includes('@')){
        parrentdiv.classList.add('actis')
        btn.classList.add('active')
        img.style.display = "block"
        msgerror.style.display = "block"
    }else{
        if(parrentdiv.classList.contains('actis')){
            parrentdiv.classList.remove('actis')
        }
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
        }
        img.style.display = "none"
        msgerror.style.display = "none"
    }
})