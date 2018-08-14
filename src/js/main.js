function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.value.indexOf('nav_active') === -1 ? nav.classList.value = 'nav nav_active' : nav.classList.value = 'nav';
}

function scrollToElement(element) {
    let position;
    if (typeof element === 'number') {
        position = element;
    } else {
        switch (element) {
            default:
                position = document.getElementById(element).getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80;
                break;
        }
    }
    window.scrollTo({top: position, behavior: 'smooth'})
}

new WOW().init();

const constructor = {
    helmetM: document.getElementById('helmet-m'),
    helmetG: document.getElementById('helmet-g'),
    helmetW: document.getElementById('helmet-w'),
    visorG1: document.getElementById('visor-g-1'),
    visorG2: document.getElementById('visor-g-2'),
    visorG3: document.getElementById('visor-g-3'),
    visorG4: document.getElementById('visor-g-4'),
    visorG5: document.getElementById('visor-g-5'),
    visorG6: document.getElementById('visor-g-6'),
    visorW1: document.getElementById('visor-w-1'),
    visorW2: document.getElementById('visor-w-2'),
    visorW3: document.getElementById('visor-w-3'),
    visorW4: document.getElementById('visor-w-4'),
    visorW5: document.getElementById('visor-w-5'),
    visorW6: document.getElementById('visor-w-6'),
    holder1: document.getElementById('holder-1'),
    holder2: document.getElementById('holder-2'),
    holder3: document.getElementById('holder-3'),
    holder4: document.getElementById('holder-4'),
    holder5: document.getElementById('holder-5'),
    holder6: document.getElementById('holder-6'),
    holder7: document.getElementById('holder-7'),
    helmetChosen: 'helmetG',
    visorChosen: false,
    holderChosen: false,
    playStartingAnimation : function() {
        this.helmetG.classList += ' visible animation-start';
        setTimeout(() => this.visorG5.classList += ' visible visor-1 animation-start', 700);
        setTimeout(() => this.visorG2.classList += ' visible visor-2 animation-start', 1000);
        setTimeout(() => this.visorG4.classList += ' visible visor-3 animation-start', 1300);
        setTimeout(() => this.visorG3.classList += ' visible visor-4 animation-start', 1600);
        setTimeout(() => this.visorG6.classList += ' visible visor-5 animation-start', 1900);
        setTimeout(() => this.visorG1.classList += ' visible visor-6 animation-start', 2200);
        setTimeout(() => this.holder1.classList += ' visible holder-1 animation-start', 700);
        setTimeout(() => this.holder2.classList += ' visible holder-2 animation-start', 1060);
        setTimeout(() => this.holder3.classList += ' visible holder-3 animation-start', 1420);
        setTimeout(() => this.holder4.classList += ' visible holder-4 animation-start', 1780);
        setTimeout(() => this.holder6.classList += ' visible holder-5 animation-start', 2140);
    },
    resetAll: function(changeable) {
        document.querySelectorAll('.visible').forEach(function(item){
            if (
                ((changeable === 'visor' || changeable === 'holder') && item.classList.value.indexOf('const__helmet') !== -1 ) ||
                (changeable === 'visor' && constructor.holderChosen && item.classList.value.indexOf('const__holder') !== -1) ||
                (changeable === 'holder' && constructor.visorChosen && item.classList.value.indexOf('const__visor') !== -1)
            ) {} else {
                item.classList.remove('visible');
            }
        });
        document.querySelectorAll('.chosen').forEach(function(item){
            if (
                ((changeable === 'visor' || changeable === 'holder') && item.id.indexOf('option-helmet') !== -1 ) ||
                (changeable === 'visor' && constructor.holderChosen && item.id.indexOf('option-holder') !== -1) ||
                (changeable === 'holder' && constructor.visorChosen && item.id.indexOf('option-visor') !== -1)
            ) {} else {
                item.classList.remove('chosen');
            }
        });
        setTimeout(function(){
            document.querySelectorAll('.animation-start').forEach(function(item){item.classList.remove('animation-start')});
        },700);
        if (changeable === 'helmet'){
            document.querySelectorAll('.helmet-chosen').forEach(function(item){item.classList.remove('helmet-chosen')});
        }
        if (changeable === 'visor') {
            document.querySelectorAll('.visor-chosen').forEach(function(item){item.classList.remove('visor-chosen')});
        }
        if (changeable === 'holder') {
            document.querySelectorAll('.holder-chosen').forEach(function(item){item.classList.remove('holder-chosen')});
        }
    },
    chooseHelmet: function(helmet) {
        this.resetAll('helmet');
        document.getElementById('option-helmet-' + helmet.slice(-1).toLowerCase()).classList += ' chosen';
        document.getElementById('chosen-helmet').innerText = document.getElementById('option-helmet-' + helmet.slice(-1).toLowerCase()).querySelector('.custom__opt-name').innerText;
        this[helmet].classList += ' visible helmet-chosen';
        this.helmetChosen = helmet;
    },
    chooseVisor: function(visor) {
        this.resetAll('visor');
        document.getElementById('option-visor-' + visor).classList += ' chosen';
        document.getElementById('chosen-visor').innerText = document.getElementById('option-visor-' + visor).querySelector('.custom__opt-name').innerText;
        visor = this.helmetChosen === 'helmetG' ? 'visorG' + visor : 'visorW' + visor;
        this[visor].classList += ' visible visor-chosen';
        this.visorChosen = true;
    },
    chooseHolder: function(holder) {
        this.resetAll('holder');
        document.getElementById('option-holder-' + holder.slice(-1)).classList += ' chosen';
        document.getElementById('chosen-holder').innerText = document.getElementById('option-holder-' + holder.slice(-1)).querySelector('.custom__opt-name').innerText;
        this[holder].classList += ' visible holder-chosen';
        this.holderChosen = true;
    }
};
document.getElementById('option-helmet-g').addEventListener('click', constructor.chooseHelmet.bind(constructor, 'helmetG'));
document.getElementById('option-helmet-m').addEventListener('click', constructor.chooseHelmet.bind(constructor, 'helmetM'));
document.getElementById('option-helmet-w').addEventListener('click', constructor.chooseHelmet.bind(constructor, 'helmetW'));
document.getElementById('option-visor-1').addEventListener('click', constructor.chooseVisor.bind(constructor, '1'));
document.getElementById('option-visor-2').addEventListener('click', constructor.chooseVisor.bind(constructor, '2'));
document.getElementById('option-visor-3').addEventListener('click', constructor.chooseVisor.bind(constructor, '3'));
document.getElementById('option-visor-4').addEventListener('click', constructor.chooseVisor.bind(constructor, '4'));
document.getElementById('option-visor-5').addEventListener('click', constructor.chooseVisor.bind(constructor, '5'));
document.getElementById('option-visor-6').addEventListener('click', constructor.chooseVisor.bind(constructor, '6'));
document.getElementById('option-holder-1').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder1'));
document.getElementById('option-holder-2').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder2'));
document.getElementById('option-holder-3').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder3'));
document.getElementById('option-holder-4').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder4'));
document.getElementById('option-holder-5').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder5'));
document.getElementById('option-holder-6').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder6'));
document.getElementById('option-holder-7').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder7'));

let last_known_scroll_position = 0;
let ticking = false;
let constructorAnimationPlayed = false;
let scrollArrowVisible = false;
let evolutionHelmetAnimationPlayed = false;
let noiseAnimationPlayed = false;
let sizesAnimationPlayed = false;
let scratchAnimationPlayed = false;
let absorptionAnimationPlayed = false;
let specsAnimationPlayed = false;
let visitAnimationPlayed = false;

function doSomething(scroll_pos) {
    if (!scrollArrowVisible && scroll_pos > 100) {
        document.getElementById('arrowToTop').classList.value += ' visible';
        document.getElementById('arrowToTop').classList.remove('invisible');
        scrollArrowVisible = true;
    } else if (scrollArrowVisible && scroll_pos<= 100) {
        document.getElementById('arrowToTop').classList.remove('visible');
        document.getElementById('arrowToTop').classList.value += ' invisible';
        scrollArrowVisible = false
    }
    if (!constructorAnimationPlayed && scroll_pos > document.getElementById('customization').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 230) {
        constructor.playStartingAnimation();
        constructorAnimationPlayed = true;
    }
    if (!evolutionHelmetAnimationPlayed && scroll_pos > document.getElementById('evolution').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 300) {
        document.getElementById('evolutionHelmet').classList.value += ' slideInRightBottom';
        document.getElementById('evolutionFour').classList.value += ' zoomIn';
        evolutionHelmetAnimationPlayed = true
    }
    if (!noiseAnimationPlayed && scroll_pos > document.getElementById('noiseContainer').getBoundingClientRect().top - document.body.getBoundingClientRect().top + 50) {
        document.getElementById('noiseHelmet').classList.value += ' animated';
        document.getElementById('noiseText').classList.value += ' animated';
        noiseAnimationPlayed = true
    }
    if (!sizesAnimationPlayed && scroll_pos > document.getElementById('sizesWrapper').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 350) {
        document.getElementById('sizesButtons').classList.value += ' animated';
        document.getElementById('sizesHelmet').classList.value += ' animated';
        sizesAnimationPlayed = true
    }
    if (!scratchAnimationPlayed && scroll_pos > document.getElementById('specsWrapper').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 180) {
        document.getElementById('specsHelmet').classList.value += ' animated';
        scratchAnimationPlayed = true
    }
    if (!absorptionAnimationPlayed && scroll_pos > document.getElementById('protectionWrapper').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 180) {
        document.getElementById('protectionHelmet').classList.value += ' animated';
        absorptionAnimationPlayed = true
    }
    if (!specsAnimationPlayed && scroll_pos > document.getElementById('specs').getBoundingClientRect().top - document.body.getBoundingClientRect().top + 400) {
        document.getElementById('questionHelmet').classList.value += ' animated';
        specsAnimationPlayed = true
    }
    if (!visitAnimationPlayed && scroll_pos > document.getElementById('visit').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 300) {
        document.getElementById('visitHelmet1').classList.value += ' animated';
        document.getElementById('visitHelmet2').classList.value += ' animated';
        document.getElementById('visitHelmet3').classList.value += ' animated';
        document.getElementById('visitHelmet4').classList.value += ' animated';
        specsAnimationPlayed = true
    }
}

window.addEventListener('scroll', function() {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
        });
        ticking = true;
    }
});