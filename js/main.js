const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

let carouselContent = '';

for (let i = 0 ; i < images.length ; i++){
    carouselContent += `
    <div class="carousel-element">
        <img src="${images[i]}" alt="Random picture">
    </div>`
}

const carouselWrapper = document.querySelector('div.jumbo-left');
carouselWrapper.innerHTML += carouselContent;


let carouselContentright = '';

for (let i = 0 ; i < images.length ; i++){
    carouselContentright += `
    <div class="my-card">
        <img src="${images[i]}" alt="Random picture">
    </div>`
}

let carouselWrapperright = document.querySelector('div.jumbo-right');
carouselWrapperright.innerHTML += carouselContentright;


const carouselElements = document.getElementsByClassName('carousel-element');
carouselElements[0].classList.add('active');
console.log(carouselElements);

const nextButton = document.querySelector('div.next');
const previousButton = document.querySelector('div.previous');

let activeElement = 0;

document.getElementsByClassName('my-card')[activeElement].classList.add('active');

nextButton.addEventListener('click', function() {
    if(activeElement == 4){
        console.log("sei già all'ultima immagine");
    }
    else{
        carouselElements[activeElement].classList.remove('active');
        document.getElementsByClassName('my-card')[activeElement].classList.remove('active');
        activeElement++;
        carouselElements[activeElement].classList.add('active');
        document.getElementsByClassName('my-card')[activeElement].classList.add('active');
    }
});

previousButton.addEventListener('click', function() {
    if(activeElement == 0){
        console.log("sei già alla prima immagine");
    }
    else{
        carouselElements[activeElement].classList.remove('active');
        document.getElementsByClassName('my-card')[activeElement].classList.remove('active');
        activeElement--; 
        carouselElements[activeElement].classList.add('active');
        document.getElementsByClassName('my-card')[activeElement].classList.add('active');
    }
    
    
});