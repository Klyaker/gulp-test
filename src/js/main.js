import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


let modalover = document.querySelector('.modaloverlay');
let buttonOpen = document.querySelector('.btn');
let buttonClose = document.querySelector('.modaloverlay');
let modalmain = document.querySelector('.mainmodal');



const openModal = () => {
    buttonOpen.addEventListener('click', (e) => {
        modalover.classList.add('active');
    });
};


buttonOpen.addEventListener('click', openModal)

const close = () => {
    modalover.classList.remove('active');
};

buttonClose.addEventListener('click', close);

let pushbtn = 0;

function increment() {
    pushbtn += 1;
    modalmain.innerHTML += '<h1>1</h1>';
}

buttonOpen.addEventListener('click', increment);

