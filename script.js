/*
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto insieme a lezione, che troverete direttamente nella mia repository di github a questo link: https://github.com/henri-kapidani/classe96-0420-carousel
Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati. Ricordiamo sempre l'importanza dell'integrità del dato.
Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello: al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
Questo è l'array dei dati:
*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const containerHighlighted = document.querySelector('.highlighted');
const containerThumbs = document.querySelector('.thumbs');

for (let i = 0; i < images.length; i++) {
    let objImage = images[i]

	containerHighlighted.innerHTML += 
    `<img src="${objImage.image}" alt="" class="${i == 0 ? 'active' : ''}">
     <div class="description">
     <h2 class="${i == 0 ? 'active' : ''}">${objImage.title}</h2>
     <p class="${i == 0 ? 'active' : ''}">${objImage.text}</p>
     </div>`;
	containerThumbs.innerHTML += `<img src="${objImage.image}" alt="" class="${i == 0 ? 'active' : ''}">`;
}



const listHighlighted = document.querySelectorAll('.highlighted img');
const titleHighlighted = document.querySelectorAll('.description h2');
const textHighlighted = document.querySelectorAll('.description p');

const listThumbs = document.querySelectorAll('.thumbs img');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');


let activeIndex = 0;

btnNext.addEventListener('click',
	function() {
		listHighlighted[activeIndex].classList.remove('active');
        titleHighlighted[activeIndex].classList.remove('active');
        textHighlighted[activeIndex].classList.remove('active');
		listThumbs[activeIndex].classList.remove('active');
		activeIndex++;
		if (activeIndex >= listHighlighted.length) {
			activeIndex = 0;
		}
		listHighlighted[activeIndex].classList.add('active');
        titleHighlighted[activeIndex].classList.add('active');
        textHighlighted[activeIndex].classList.add('active');
		listThumbs[activeIndex].classList.add('active');
	}
);

btnPrev.addEventListener('click',
	function() {
		listHighlighted[activeIndex].classList.remove('active');
        titleHighlighted[activeIndex].classList.remove('active');
        textHighlighted[activeIndex].classList.remove('active');
		listThumbs[activeIndex].classList.remove('active');
		activeIndex--;
		if (activeIndex < 0) {
			activeIndex = listHighlighted.length - 1;
		}
		listHighlighted[activeIndex].classList.add('active');
        titleHighlighted[activeIndex].classList.add('active');
        textHighlighted[activeIndex].classList.add('active');
		listThumbs[activeIndex].classList.add('active');
	}
);

for (let i = 0; i < listThumbs.length; i++) {
	listThumbs[i].addEventListener('click',
		function() {
			console.log('cliccata la miniature in posizione ' + i)
			listHighlighted[activeIndex].classList.remove('active');
			listThumbs[activeIndex].classList.remove('active');
            titleHighlighted[activeIndex].classList.remove('active');
            textHighlighted[activeIndex].classList.remove('active');
			activeIndex = i;
			listHighlighted[activeIndex].classList.add('active');
			listThumbs[activeIndex].classList.add('active');
            titleHighlighted[activeIndex].classList.add('active');
            textHighlighted[activeIndex].classList.add('active');
		}
	)
}

let BtnNormal = document.querySelector(".normal")
BtnNormal.addEventListener("click",function(){
    BtnNormal = setInterval(() => {
        listHighlighted[activeIndex].classList.remove('active');
        listThumbs[activeIndex].classList.remove('active');
        titleHighlighted[activeIndex].classList.remove('active');
        textHighlighted[activeIndex].classList.remove('active');
        activeIndex++;
        if (activeIndex >= listHighlighted.length) {
            activeIndex = 0;
        }
        listHighlighted[activeIndex].classList.add('active');
        listThumbs[activeIndex].classList.add('active');
        titleHighlighted[activeIndex].classList.add('active');
        textHighlighted[activeIndex].classList.add('active');
    }, 3000);
    BtnReverse.classList.add("deactivate")
    document.querySelector(".choice-order").classList.add("deactivate")
    document.querySelector(".your-choice").classList.add("activate")
    document.querySelector(".normal").disabled = true
}
)
    


let BtnReverse = document.querySelector(".reverse")
BtnReverse.addEventListener("click",function(){
    BtnReverse = setInterval(() => {
        listHighlighted[activeIndex].classList.remove('active');
        listThumbs[activeIndex].classList.remove('active');
        titleHighlighted[activeIndex].classList.remove('active');
        textHighlighted[activeIndex].classList.remove('active');
        activeIndex--;
        if (activeIndex < 0) {
            activeIndex = listHighlighted.length - 1
        }
        listHighlighted[activeIndex].classList.add('active');
        listThumbs[activeIndex].classList.add('active');
        titleHighlighted[activeIndex].classList.add('active');
        textHighlighted[activeIndex].classList.add('active');
    }, 3000);
    BtnNormal.classList.add("deactivate")
    document.querySelector(".choice-order").classList.add("deactivate")
    document.querySelector(".your-choice").classList.add("activate")
    document.querySelector(".reverse").disabled = true

})
