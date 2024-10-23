function loadNoty() {
    return new Promise((resolve, reject) => {
        if (typeof Noty !== 'undefined') {
            resolve();
            return;
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.tutorialjinni.com/noty/3.1.4/noty.css';
        document.head.appendChild(link);
        const link2 = document.createElement('link');
        link2.rel = 'stylesheet';
        link2.href = 'https://cdn.tutorialjinni.com/noty/3.1.4/noty.min.css';
        document.head.appendChild(link2);

        const script = document.createElement('script');
        script.src = 'https://cdn.tutorialjinni.com/noty/3.1.4/noty.js';

        script.onload = () => {
            resolve();
        };

        script.onerror = () => {
            console.error("Error loading Noty.js from CDN");
            reject(new Error('Failed to load Noty.js'));
        };

        document.body.appendChild(script);
        const script2 = document.createElement('script');
        script2.src = 'https://cdn.tutorialjinni.com/noty/3.1.4/noty.min.js';

        script2.onload = () => {
            resolve();
        };

        script2.onerror = () => {
            console.error("Error loading Noty.js from CDN");
            reject(new Error('Failed to load Noty.js'));
        };

        document.body.appendChild(script2);
    });
}

async function showNotification(text = "", type = "info", timeout = 3000) {
    if (text.trim() == "" || text == null || text == undefined) {
        return;
    }
    await loadNoty();
    new Noty({
        text: text,
        type: type,
        timeout: timeout,
        layout: 'topRight',
        progressBar: true,
        progressBar: true,
        closeWith: ['click'],
        theme: 'metroui'
    }).show();
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await loadNoty();
        console.log("Noty.js and its CSS are loaded");
    } catch (error) {
        console.error('Failed to load Noty:', error);
    }
});