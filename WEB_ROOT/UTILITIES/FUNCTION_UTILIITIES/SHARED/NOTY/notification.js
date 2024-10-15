// Function to dynamically load Noty.js and its CSS
function loadNoty() {
    return new Promise((resolve, reject) => {
        // Check if Noty is already loaded
        if (typeof Noty !== 'undefined') {
            resolve(); // If already loaded, resolve the promise
            return;
        }

        // Create link element for Noty CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.tutorialjinni.com/noty/3.1.4/noty.css';
        document.head.appendChild(link);
        const link2 = document.createElement('link');
        link2.rel = 'stylesheet';
        link2.href = 'https://cdn.tutorialjinni.com/noty/3.1.4/noty.min.css';
        document.head.appendChild(link2);

        // Create script element for Noty JS
        const script = document.createElement('script');
        script.src = 'https://cdn.tutorialjinni.com/noty/3.1.4/noty.js';

        // Resolve the promise when the script loads
        script.onload = () => {
            console.log("Noty.js loaded successfully");
            resolve();
        };

        // Reject the promise if there is an error loading the script
        script.onerror = () => {
            console.error("Error loading Noty.js from CDN");
            reject(new Error('Failed to load Noty.js'));
        };

        document.body.appendChild(script); // Append the script to the body



        const script2 = document.createElement('script');
        script2.src = 'https://cdn.tutorialjinni.com/noty/3.1.4/noty.min.js';

        // Resolve the promise when the script2 loads
        script2.onload = () => {
            console.log("Noty.js loaded successfully");
            resolve();
        };

        // Reject the promise if there is an error loading the script2
        script2.onerror = () => {
            console.error("Error loading Noty.js from CDN");
            reject(new Error('Failed to load Noty.js'));
        };

        document.body.appendChild(script2); // Append the script2 to the body
    });
}

// Function to show notification
async function showNotification(type, text, timeout = 3000) {
    // Load Noty if it's not already loaded
    await loadNoty(); // Wait for Noty to load

    // Create and show the notification
    new Noty({
        text: text,
        type: type, // 'alert', 'success', 'warning', 'error', or 'info'
        timeout: timeout, // Ensure timeout is set correctly
        layout: 'topRight', // You can change this to other layouts
        progressBar: true,
        animation: {
            open: 'animated fadeInRight', // Animation when opening
            close: 'animated fadeOutRight'  // Animation when closing
        },
        theme: 'sunset' // Optional: You can change the theme
    }).show();
}


// Ensure Noty is loaded after the document is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await loadNoty();
        console.log("Noty.js and its CSS are loaded");
    } catch (error) {
        console.error('Failed to load Noty:', error);
    }
});
