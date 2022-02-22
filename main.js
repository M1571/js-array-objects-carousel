// console.log('prova');

/*
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
*/

// ----------------------------------------------
// NEW FILE

const carousel = [

    {
        items: 'img/01.jpg', 
        title: 'Svezia', 
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },

    {
        items: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum',
    },

    {
        items: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },

    {
        items: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },

    {
        items: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    }

]

console.log(carousel);

// ----------------------------------------------

const imgWrap = document.querySelector('.img-wrap');
const imgText = document.querySelector('.lorem-text');
const imgCont = document.querySelector(".icon-sm");

console.log(imgWrap);
console.log(imgText);
console.log(imgCont);

// ----------------------------------------------



// ----------------------------------------------
// OLD FILE

/*
let title2 = document.querySelector(".img-bg h2")

let active = 0;

let imgBg = document.querySelector(".img-bg");

let pargF = document.querySelector(".img-bg p");

// ----------------------------------------------

const btn = document.querySelector(".btn-dw");

btn.addEventListener('click',
    function () {
        if (active < items.length - 1) {
            console.log("click");
            active++
            console.log(active);
            imgBg.setAttribute("src", items[active])
            title2.innerHTML = title[active]
            pargF.innerHTML = text[active]
        }
    }

)

// ----------------------------------------------

let btnUp = document.querySelector(".btn-up");

btnUp.addEventListener('click',
    function () {
        if (active > 0) {
            active--
            imgBg.setAttribute("src", items[active])
            title2.innerHTML = title[active]
            pargF.innerHTML = text[active]
        }
    }
)
*/

// ----------------------------------------------
