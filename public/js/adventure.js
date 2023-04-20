// This function is called when the "Return to Town" button is clicked. It replaces the current URL with the one that corresponds to the town page.
const returnBtn = (event) => {
    document.location.replace(`/town/${event.target.dataset.id}`)
};

// These functions are called when the corresponding numbered buttons are clicked. They replace the current URL with the one that corresponds to the traveling page, passing in the `id` and `monId` dataset attributes of the clicked button
const firstBtn = (event) => {
    document.location.replace(`/traveling?id=${event.target.dataset.id}&monId=${event.target.dataset.monid}`)
};

const secondBtn = (event) => {
    document.location.replace(`/traveling?id=${event.target.dataset.id}&monId=${event.target.dataset.monid}`)
};

const thirdBtn = (event) => {
    document.location.replace(`/traveling?id=${event.target.dataset.id}&monId=${event.target.dataset.monid}`)
};

const forthBtn = (event) => {
    document.location.replace(`/traveling?id=${event.target.dataset.id}&monId=${event.target.dataset.monid}`)
};

const fifthBtn = (event) => {
    document.location.replace(`/traveling?id=${event.target.dataset.id}&monId=${event.target.dataset.monid}`)
};
// These lines of code select the numbered buttons using their `id` attribute, and add event listeners to them. When the corresponding button is clicked, the appropriate numbered function (`firstBtn`, `secondBtn`, etc.) is called.
const firstEl = document.querySelector('#first');
firstEl.addEventListener('click', firstBtn)

const secondEl = document.querySelector('#second');
secondEl.addEventListener('click', secondBtn)

const thirdEl = document.querySelector('#third');
thirdEl.addEventListener('click', thirdBtn)

const forthEl = document.querySelector('#forth');
forthEl.addEventListener('click', forthBtn)

const fifthEl = document.querySelector('#fifth');
fifthEl.addEventListener('click', fifthBtn)
// These lines of code select the "Return to Town" button using its `id` attribute, and add an event listener to it. When the button is clicked, the `returnBtn` function is called.
const returnEl = document.querySelector('#returnBtn');
returnEl.addEventListener('click', returnBtn)