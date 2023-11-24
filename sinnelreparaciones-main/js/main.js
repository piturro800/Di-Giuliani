window.addEventListener("load", ()=>{
    function ScrollShow(box){
        ScrollReveal({
            delay: 500,
            duration: 1000,
            rotate: {
                x: 50,
            },
            viewOffset:{
                bottom:100,
            }
        }).reveal(box)
    }
    function ScrollSide(cont){
        ScrollReveal({
            delay: 500,
            duration: 1500,
            distance: "400px",
            origin: "left",
        }).reveal(cont)
    }

    ScrollShow("#box-job-reveal")
    ScrollSide(".user-input")
})

const scrollJob = document.querySelector(".job-click")
const scrollContact = document.querySelector(".contact-click")
const scrollJob2 = document.querySelector(".keep-going")

scrollJob.addEventListener("click", ()=>{
    window.scrollTo({
        top: 630,
        left: 0,
        behavior: "smooth"
    })
})
scrollJob2.addEventListener("click", ()=>{
    window.scrollTo({
        top: 630,
        left: 0,
        behavior: "smooth"
    })
})
scrollContact.addEventListener("click", ()=>{
    window.scrollTo({
        top: 1700,
        left: 0,
        behavior: "smooth"
    })
})


const $form = document.querySelector('#form')
const $btnMailTo = document.querySelector('#mailto')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(ev){
    ev.preventDefault()
    const form = new FormData(this)
    $btnMailTo.setAttribute("href",`mailto:contacto@sinnelreparaciones.com?subject= Nombre:${form.get('name')} Correo:${form.get('e-mail')}&body=${form.get('message')}`)
    $btnMailTo.click()
}

