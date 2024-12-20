const showLoader = () => {
    document.getElementById('page-loader').classList.remove('hidden');
};
  
const hideLoader = () => {
    document.getElementById('page-loader').classList.add('hidden');
};  


// inline button spinner : this is for the button 

function Buttonspinner(button) {
    const spinner = document.createElement('span');
    spinner.classList.add('spinner');

    button.appendChild(spinner); 
    button.disabled = true; 
    spinner.style.display = 'inline-block'; 
}