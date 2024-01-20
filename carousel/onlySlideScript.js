// let slideMain=document.querySelectorAll('.carousel-inner')
let slides=document.querySelectorAll('.carousel-item')

function render() {
    let offset=0;
    slides.forEach((slide, index)=>{
        setTimeout(()=>{
            slide.style.transform=`translateX(-${offset}px)`
            offset += slide.offsetWidth;
        },3000*index)

    })


}

render()