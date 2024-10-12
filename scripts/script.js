// script para troca de tema, que armazena a escolha em todas as páginas do site
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('trocaTema') 

const enableDarkmode = () => {
document.body.classList.add('darkmode') 
localStorage.setItem('darkmode', 'active')
} 

const disableDarkmode = () => {
document.body.classList.remove('darkmode') 
localStorage.setItem('darkmode', null) 
} 


if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
darkmode !== "active" ? enableDarkmode() : disableDarkmode() 
}) 


