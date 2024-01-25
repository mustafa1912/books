let btnPdf = document.querySelectorAll('.box .btn')
let iframe = document.querySelector('iframe')

btnPdf.forEach(ele=>{
    ele.addEventListener('click', () => {
        iframe.closest('.iframe').classList.remove('d-none')
        iframe.src= ele.id
        iframe.scrollIntoView()
    })
})

let locationHref = location.href
let navLink = document.querySelectorAll('.nav-item .nav-link')
navLink.forEach(ele=>{
    locationHref.includes(ele.href) && ele.classList.add('active')
 })