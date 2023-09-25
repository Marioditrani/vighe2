const body = document.querySelector('body')
const light = document.getElementById('lightButton')

light.addEventListener('click', ()=>{
    body.classList.toggle ('dark');
    if(light.innerHTML ==='<i class="far fa-moon></i>'){
        light.innerHTML ='<i class="fa-regular fa-sun" style="color: #ffffff;"></i>'
    }
    else{
        light.innerHTML ='<i class="far fa-moon></i>'
    }
})

let item = document.querySelector('.menu1050');
item.addEventListener("click", function() {
  document.body.classList.toggle('menu-open');
});