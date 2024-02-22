

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
const selectTimer = [document.getElementById('zero'), document.getElementById('one'), document.getElementById('two'), document.getElementById('three')];

function updateTimerAndText() {

    if (i === 0) {
        timer.forEach(element => element.classList.remove('timer'));
    }
    
    bgImg.style.backgroundImage = `url(${backgrounds[i]})`;
    timer[i].classList.add('timer');
    for (let j = 0; j < backgroundText.length; j++) {
        backgroundText[j].classList.toggle('hidden', j !== i);
        
    }
};

function handleSelectClick(index) {
    return function() {
        i = index;
        selectTimer.filter((element, index) => {
            element[index] < i;
        }).forEach(element => element.classList.remove('timer'));
        updateTimerAndText();

        clearTimeout(timeoutId);

        timeoutId = setTimeout(autoAdvance, 5000);
    };
}

function autoAdvance() {
    i = (i + 1) % backgrounds.length;
    updateTimerAndText();

    timeoutId = setTimeout(autoAdvance, 5000);
}

selectTimer.forEach((element, index) => {
    element.addEventListener('click', handleSelectClick(index));
});

let timeoutId = setTimeout(autoAdvance, 5000);

updateTimerAndText();

// window.onload = function () {
//     updateTimerAndText();
//     setInterval(function() {
//         i = (i + 1) % backgrounds.length;
//         updateTimerAndText();
//     }, 5000);
    
// };

