var actions = document.getElementsByClassName('action');
var modalOpen = false;

for(var i = 0; i < actions.length; i++) {
    // Register click handlers
    actions[i].addEventListener('click', openModal, false);
}

function openModal() {
    let modalBackdrop = document.getElementsByClassName('modal-backdrop');
    let modal = document.getElementsByClassName('modal');
    
    
    
    modal.style.visibility = 'visible';
    modalBackdrop.style.visibility = 'visible';
    console.log('Opening modal');
}
