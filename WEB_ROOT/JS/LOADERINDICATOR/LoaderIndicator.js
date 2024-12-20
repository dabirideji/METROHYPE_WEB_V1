function createLoader() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.className = 'page-loader hidden';
    
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    
    loader.appendChild(spinner);
    document.body.appendChild(loader);
}

function showLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.classList.remove('hidden');
    }
}

function hideLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.classList.add('hidden');
    }
}

//inline button spinner: this is for the button
function buttonSpinner(button) {
    const spinner = document.createElement('span');
    spinner.classList.add('buttonspinner');
    button.appendChild(spinner);
    button.disabled = true;
    spinner.style.display = 'inline-block';
}

createLoader();