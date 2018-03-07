//get Modal Elemnt
const modal = document.getElementById('simpleModal');
//get open modal button
const modalBtn = document.getElementById('modalBtn');
//get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for openClick
modalBtn.addEventListener('click', openModal);

//listen for closingClick
closeBtn.addEventListener('click', closeModal);

//listen for outside click
window.addEventListener('click', clickOutside);

function openModal(){
    modal.style.display ='block';
}
function closeModal(){
    modal.style.display = 'none';
}
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
    
}