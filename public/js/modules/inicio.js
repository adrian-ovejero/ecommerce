import productController from '/js/controllers/product.js';

console.log('🆗: Módulo PageInicio cargado.');

class PageInicio {
    
    static async renderTemplateCards(products) {
        const hbsFile = await fetch('templates/inicio.hbs').then(r => r.text());
        const template = Handlebars.compile(hbsFile);
        const html = template({ products });
        document.querySelector('.cards-container').innerHTML = html;
    }
    
    static async init () {
        console.log('PageInicio.init()');
        
        const products = await productController.getProducts();
        console.log(`Se encontraron ${products.length} productos`);
        
        await PageInicio.renderTemplateCards(products);
        
    }
}

export default PageInicio;


//////////  Slide carrousel ///////////

const slider = document.querySelector('#slider');
console.log(slider)
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];

    slider.style.marginLeft = '-0%';
    slider.style.transition = 'all 0.5s';
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        
        slider.style.marginLeft = '-100%';
    }, 500);
}


btnRight.addEventListener('click', function(){
    Next();
})

btnLeft.addEventListener('click', function(){
    Prev();
})

setInterval(function(){
    Next();
}, 4000);


