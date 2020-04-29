if(location.pathname==="/") {
  setTimeout(function () {
        window.location.href = "signIn.html"
    }, 2000)
}

const navSlider=()=>{
    const menu=document.querySelector('.menu')
    const nav=document.querySelector('.nav-links')
    const navLink=document.querySelectorAll('.nav-links .nav-item')
    menu.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
        navLink.forEach((link,index)=>{
          if(link.style.animation){
              link.style.animation=""
          }  else {
              link.style.animation=`navTolist 0.5s ease forwards ${index/5+0.2}s`

          }
        })
        menu.classList.toggle('toggle')
    })
}
navSlider()

