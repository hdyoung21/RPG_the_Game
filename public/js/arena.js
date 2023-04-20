// This function is called when an opponent character is clicked. It adds the "selected" class to the clicked element, which highlights it.
const activate = (event) => {
    let tarEl;
    if(event.target.className.includes('opponent')){      
        tarEl = event.target;
    }else if(event.target.parentNode.className === 'oppStats'){
        tarEl = event.target.parentNode.parentNode;
    }else{
        tarEl = event.target.parentNode;
    }
    
    const current = document.getElementsByClassName('selected');
    if(current.length > 0){
        current[0].className = current[0].className.replace(" selected", "");
    }
    
    tarEl.className += " selected";
}

// These lines of code select the "Select Opponent" button using its `id` attribute, and add an event listener to it. When the button is clicked, it gets the currently selected opponent and character IDs, and replaces the current URL with the one that corresponds to the arena combat page.
const selectEl = document.querySelector('#selectOpp');
selectEl.addEventListener('click', () => {
    const current = document.getElementsByClassName('selected');
    const char_id = document.querySelector('#selectOpp').dataset.id;
    const opp_id = current[0].dataset.id;  
    document.location.replace(`/arenaCombat?id=${char_id}&opp_id=${opp_id}`);
});

// These lines of code select the opponent container using its `id` attribute, and add an event listener to it. When an opponent character is clicked, the `activate` function is called.
const charContainer = document.querySelector('#oppContainer');
charContainer.addEventListener('click', activate)

// These lines of code select the "Return to Town" button using its `id` attribute, and add an event listener to it. When the button is clicked, it replaces the current URL with the one that corresponds to the town page.
const returnBtn = document.querySelector('#returnTown');
returnBtn.addEventListener('click', (event) =>{
    document.location.replace(`/town/${event.target.dataset.id}`)
});
