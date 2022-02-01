const btn = document.getElementById('btn')
const search = document.getElementById('search')
btn.addEventListener('click', () => displaySearch())

function displaySearch(){
   search.classList.remove('unactive')
}

btn.addEventListener('keyup', () => closeSearch())

function closeSearch(){
   search.classList.toggle('unactive')
}