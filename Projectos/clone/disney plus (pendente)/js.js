
const courosel = document.querySelector('.carousel')
let sliders = []

let sliderIndex = 0

const creatSlider = () =>{
    if(sliderIndex >= movies.lenght){
        sliderIndex=0
    }

    //creating DOm element
    let slide = document.createElement('div')
    let imgElement = document.createElement('img')
    let content = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')

    //attaching all elment

    imgElement.appendChild(document.createTextNode(''))
    h1.appendChild(document.createTextNode(movies[sliderIndex].nome))
    p.appendChild(document.createTextNode(movies[sliderIndex].des))
    content.appendChild(h1)
    content.appendChild(p)
    slide.appendChild(content)
    slide.appendChild(imgElement)
    courosel.appendChild(slide)

    console.log(courosel)

    // seting imag

    imgElement.src = movies[sliderIndex].image
    sliderIndex++;

    // seting element class name

    slide.className = 'slider'
    content.className = 'slider-content'
    h1.className = 'movie-title'
    p.className = 'muvie-description'

    sliders.push(slide)

}

creatSlider()
