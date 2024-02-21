

function toggleElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.toggle('hidden');
 
}

function showMore() {
    const show = document.getElementById('more-activity-btn');
    const activitySection = document.getElementById('activity-section');

    activitySection.style.maxHeight = '3000px';
    activitySection.classList.remove('overflow-hidden');
    show.classList.add('hidden');
}

document.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn')) {
        
        const dropdowns = document.getElementsByClassName('dropdown-box');
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('hidden')) {
                openDropdown.classList.add('hidden');
            }
        }
    }
})

let i = 0;
const backgrounds = ['./Img/bedroom.jpg', './Img/pasta.jpg', './Img/mechanic.jpg', './Img/kitchen.jpg'];
const backgroundText = [document.getElementById('paint-hero'), document.getElementById('italian-hero'), document.getElementById('auto-hero'), document.getElementById('clean-hero')];
const timer = [document.getElementById('0'), document.getElementById('1'), document.getElementById('2'), document.getElementById('3')];
const bgImg = document.getElementById('img-hero');

function updateTimerAndText() {

    bgImg.style.backgroundImage = `url(${backgrounds[i]})`;
    
    timer.forEach(element => element.style.backgroundColor = 'rgba(255, 255, 255, .4');
    
    for (let j = 0; j <= i; j++) {
        timer[j].style.backgroundColor = 'white';
    }
    

    for (let j = 0; j < backgroundText.length; j++) {
        backgroundText[j].classList.toggle('hidden', j !== i);
        
    }
};

window.onload = function () {
    updateTimerAndText();
    setInterval(function() {
        i = (i + 1) % backgrounds.length;
        timer.forEach(element => element.style.backgroundColor = 'rgba(255, 255, 255, .4');
        updateTimerAndText();
    }, 5000);
};

// setInterval (function() {
//     const bgImg = document.getElementById('img-hero');
//     if (i < 4) {
//         bgImg.style.backgroundImage = `url(${backgrounds[i]})`;
//         backgroundText.forEach((element, index) => {
//             element.classList.toggle('hidden', index !== i);
//         });
//         timer[i].style.backgroundColor = "white";
        
//         i++;
//     } else {
//         i = 0;
//         timer.forEach((element) => {
//             element.style.backgroundColor = "rgba(255, 255, 255, .4)"
//         })
//     }

// }, 5000);