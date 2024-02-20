

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

// document.addEventListener('click', (event) => {
//     if ()
// })