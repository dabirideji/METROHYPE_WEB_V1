//pagination
const rowsPerPage = 5;
let currentPage = 1;

// Toggle Sidebar
function menuClick() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('hidden');
}

// DOM Elements
const orderTable = document.getElementById('orderTable');
const paginationInfo = document.getElementById('paginationInfo');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');

// Display orders for the current page
async function displayOrders() {
  await window.getOrders();
  console.log('afteer fethc');

  console.log('all', window.allJobs);
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentOrders = window.allJobs.slice(start, end);

  // Clear the table
  orderTable.innerHTML = '';

  // Populate table rows for current page
  currentOrders.forEach((order) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="px-2 py-2 md:px-16 md:py-5 border-b border-gray-200 bg-white text-xs md:text-sm">${
        order.jobId
      }</td>
      <td class="px-2 py-2 md:px-14 md:py-5 border-b border-gray-200 bg-white text-xs md:text-sm">
        <span class="relative inline-block px-2 py-1 font-semibold text-white">
          <span class="absolute inset-0 ${
            order.jobStatus === 'Active' ? 'bg-[#3A57E8]' : 'bg-gray-500'
          } rounded-md"></span>
          <span class="relative">${order.jobStatus}</span>
        </span>
      </td>
      <td class="px-2 py-2 md:px-8 md:py-5 border-b border-gray-200 bg-white text-xs md:text-sm">${
        formatDate(order.createdAt)
      }</td>
      <td class="px-2 py-2 md:px-12 md:py-5 border-b border-gray-200 bg-white text-xs md:text-sm">
          <button type="button" onclick="processJobDetail('${ order.jobId}')" class="bg-[#3A57E8] text-white px-2 py-1 md:px-4 md:py-2 rounded-md hover:bg-blue-600">
             Job Details
          </button>
      </td>
    `;
    orderTable.appendChild(row);
  });

  // Update pagination info
  paginationInfo.innerText = `Showing ${start + 1} to ${Math.min(
    end,
    window.allJobs.length
  )} of ${window.allJobs.length} entries`;

  // Update pagination button states
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = end >= window.allJobs.length;
}

// Pagination controls
prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayOrders();
  }
});

nextPageBtn.addEventListener('click', () => {
  if (currentPage * rowsPerPage < window.allJobs.length) {
    currentPage++;
    displayOrders();
  }
});

function processJobDetail(jobId) {
  console.log("Function Started", jobId);
  var job = allJobs.filter((job) => job.jobId == jobId);
  console.log("Job", job);
  window.sessionStorage.setItem('job', JSON.stringify(job));
  window.location.href = `../../../HTML/ADMIN/JOB/view-job.html?jobId=${jobId}`;
}

// Initial display after DOM is fully loaded
