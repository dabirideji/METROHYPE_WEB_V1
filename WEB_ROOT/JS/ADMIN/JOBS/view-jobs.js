const jobDetails = document.getElementById('jobDetails');

// Display orders for the current page
async function displayOrders() {
  await window.getOrders();

  var currentJob = window.sessionStorage.getItem('job');
  currentJob = JSON.parse(currentJob);
    
  particularJob = currentJob;
  
  particularJob.forEach((job) => {
      const jobDiv = document.createElement('div');
      jobDiv.innerHTML = `
        <div class="flex flex-col sm:flex-row justify-between mt-2">
            <div class="border border-black w-full sm:w-[70%] mb-2 sm:mb-0">
            <div class="px-4">
                <h3 class="font-bold text-[16px] text-black capitalize">description:</h3>
                <p class="capitalize font-bold" id="jobActionDescription">${job.jobActionDescription}</p>
            </div>
            <div class="bg-[#ffff00] w-20 text-center text-2xl lowercase rounded-md text-[#00ff00] px-2 py-1 mt-2 mx-4 font-bold">
                <p>Yowa</p>
            </div>
            <hr class="border border-black mt-4">
            <div class="mx-4 my-4 space-y-4">
                <p class="capitalize"><i class="fa-solid fa-arrow-up-right-from-square"></i> Link:</p>
                <p>${job.jobLink}</p>
            </div>
        </div>
        <div class="w-full sm:w-[250px] mt-6 md:mt-0 sm:ml-4">
            <div class="bg-[#3072AC] p-4 rounded-md">
                <p class="items-center text-white">
                    <i class="fa-solid fa-circle-exclamation"></i> Info
                </p>
                <p class="capitalize font-bold text-white">Fee: ₦ 5.00</p>
            </div>
        </div>
        </div>
    `;
    jobDetails.appendChild(jobDiv);
  })
    
}
