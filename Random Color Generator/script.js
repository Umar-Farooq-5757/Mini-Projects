const code = document.querySelector('.code')
const box = document.querySelector('.box')
const btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)

    const colorCode = `rgb(${r},${g},${b})`
    box.style.backgroundColor = colorCode
    code.innerHTML = colorCode
})