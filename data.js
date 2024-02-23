

function toggleElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.toggle('hidden');
 
}

function showMore() {
    const show = document.getElementById('more-activity-btn');
    const activitySection = document.getElementById('activity-section');

    activitySection.style.maxHeight = 'none';
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
    // Return to default at the beggining of the cycle
    if (i === 0) {
        timer.forEach(element => element.classList.remove('timer'));
        selectTimer.forEach(element => element.classList.remove('white'));
        selectTimer.forEach(element => element.classList.add('opaque-white'));
    }
    
    bgImg.style.backgroundImage = `url(${backgrounds[i]})`;
    timer[i].classList.add('timer');
    for (let j = 0; j < backgroundText.length; j++) {
        backgroundText[j].classList.toggle('hidden', j !== i);
        selectTimer[j].classList.toggle('cursor-pointer', j !== i);
            
    }
};
// Function to handle user interaction and restart cycle
function handleSelectClick(index) {
    return function() {
        // set the current element to the one that is clicked
        i = index;

        //reset timers if a previous element is clicked
        resetTimers(index);
        updateTimerAndText();
        // Clear any existing timeout
        clearTimeout(timeoutId);
        // Start a new timeout to automatically advance after 5 seconds
        timeoutId = setTimeout(autoAdvance, 5000);
    };

}

// Function to reset timers
function resetTimers(index) {
    const previousTimers = selectTimer.filter((element, i) => {
        return i <= index - 1;
    });

    const afterTimers = selectTimer.filter((element, i) => {
        return i >= index;
    });

    const afterTimer = timer.filter((element, i) => {
        return i >= index;
    });

    previousTimers.forEach(element => element.classList.remove('opaque-white'));
    previousTimers.forEach(element => element.classList.add('white'));

    afterTimers.forEach(element => element.classList.remove('white'));
    afterTimers.forEach(element => element.classList.add('opaque-white'));
    afterTimer.forEach(element => element.classList.remove('timer'));
}

// Function to automatically advance the cycle
function autoAdvance() {
    i = (i + 1) % backgrounds.length;
    updateTimerAndText();
    // Reset timeout for next automatic advance
    timeoutId = setTimeout(autoAdvance, 5000);
}
// Event listeners and initial setup
selectTimer.forEach((element, index) => {
    element.addEventListener('click', handleSelectClick(index));
});

let timeoutId = setTimeout(autoAdvance, 5000);

// Initial update
updateTimerAndText();


