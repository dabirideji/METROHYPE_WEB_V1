function menuClick() {
    let menu = document.getElementById("menu");
    let sidebar = document.getElementById("sidebar")

    if (sidebar.classList.contains("hidden")) {
        sidebar.classList.remove("hidden");

    } else {

        sidebar.classList.add("hidden");
    }
}

document.addEventListener('DOMContentLoaded', function () {
   //dynamic data
    const carouselData = [
        { title: "Wallet Balance", description: "0" },
        { title: "Total Orders", description: "0" },
        { title: "Total Referrals", description: "0" },
        { title: "Dynamic Cards", description: "dynamic description" },
        { title: "Dynamic Cards", description: "dynamic description" },
    ];

    const carouselContainer = document.querySelector('.carousel'); 
    const dotsContainer = document.querySelector('.dots'); 
    let currentIndex = 0;
    let intervalId;

    
    const createCarouselItem = (item, index) => {
        let cardHTML = `
            <div class="card ${index === 0 ? '' : 'hidden'} w-full bg-gradient-to-tr from-[#0ab4ff] to-[#113fda] text-white px-6 py-4 rounded-lg">
                <p class="text-sm">${item.title}</p>
                <p class="text-2xl">${item.description}</p>`; 
                cardHTML +=
            `</div>`;
        return cardHTML;
    };

    //dynamic dots and carousel card
    carouselData.forEach((item, index) => {
        carouselContainer.innerHTML += createCarouselItem(item, index);

        dotsContainer.innerHTML += `
            <div class="dot w-[8px] h-[8px] rounded-full cursor-pointer m-0.5 ${index === 0 ? 'bg-gradient-to-tr from-[#0ab4ff] to-[#113fda]' : 'bg-gray-400'}"></div>
        `;
    });

    const cards = document.querySelectorAll('.card');
    const dots = document.querySelectorAll('.dot');

    // Function to update the carousel
    const updatePagination = (index) => {
        // Hide all cards and reset dot colors
        cards.forEach((card, i) => {
            card.classList.add('hidden');
            dots[i].classList.add('bg-gray-400');
            dots[i].classList.remove('bg-gradient-to-tr', 'from-[#0ab4ff]', 'to-[#113fda]');
        });

        // Show selected card and highlight the corresponding dot
        cards[index].classList.remove('hidden');
        dots[index].classList.remove('bg-gray-400');
        dots[index].classList.add('bg-gradient-to-tr', 'from-[#0ab4ff]', 'to-[#113fda]');
        currentIndex = index;
    };

    // Function to auto-switch cards
    const autoSwitchCards = () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updatePagination(currentIndex);
    };

    // Event listeners for manual navigation via dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updatePagination(index);

            // Restart auto-switching after manual interaction
            clearInterval(intervalId);
            intervalId = setInterval(autoSwitchCards, 10000);
        });
    });

    // Initial setup
    updatePagination(currentIndex);

    // Start auto-switching on smaller screens only
    if (window.innerWidth < 1024) {
        intervalId = setInterval(autoSwitchCards, 10000);
    }
});