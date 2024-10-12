let darkmode =localstorage.getItem('darkmode')
const trocaTema = document.getElement.ById('trocaTema') 

const enableDarkmode = () => {
document.body.classList.add('darkmode') 
localstorage.setItem('darkmode', 'active')
} 

const disableDarkmode = () => {
document.body.classList.remove('darkmode') 
localstorage.setItem('darkmode', null) 
} 

trocaTema.addEventListener('click',() => {
darkmode !== "active" ? enableDarkmode() : disableDarkmode() 
}) 
