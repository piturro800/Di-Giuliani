const burger = document.querySelector(".burger")
const menu = document.querySelector(".menus")
const links = document.querySelectorAll(".menus li")

addEventListener("load",()=>{
    menu.classList.toggle("menustrans")
})

const navslide = () => {
    
    burger.addEventListener("click", ()=>{
        menu.classList.toggle("menuact")

        links.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ""
            }
            else{
                link.style.animation = `listfade 0.5s ease forwards ${index / 10 + 0.4}s`
            }
        })
        burger.classList.toggle("toggle")
    })
}
navslide()