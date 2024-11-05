// Toggle Sidebar
function menuClick() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('hidden');
}

// Sample orders data
const orders = [
  { ref: '#MT-032777', status: 'Active', date: '14 Sep 2024' },
  { ref: '#MT-062235', status: 'Closed', date: '14 Sep 2023' },
  { ref: '#MT-136913', status: 'Closed', date: '07 Aug 2024' },
  { ref: '#MT-174423', status: 'Closed', date: '05 Aug 2024' },
  { ref: '#MT-808140', status: 'Active', date: '27 Jul 2024' },
  { ref: '#MT-012345', status: 'Closed', date: '22 Jun 2024' },
  { ref: '#MT-678910', status: 'Active', date: '15 May 2024' },
  // Add more orders as needed
];

const rowsPerPage = 5;
let currentPage = 1;

// DOM Elements
const orderTable = document.getElementById('orderTable');
const paginationInfo = document.getElementById('paginationInfo');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');

// Display orders for the current page
function displayOrders() {
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentOrders = orders.slice(start, end);

  // Clear the table
  orderTable.innerHTML = '';

  // Populate table rows for current page
  currentOrders.forEach((order) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="px-2 py-2 md:px-16 md:py-5 border-b border-gray-200 bg-white text-xs md:text-sm">${
        order.ref
      }</td>
      <td class="px-2 py-2 md:px-14 md:py-5 border-b border-gray-200 bg-white text-xs md:text-sm">
        <span class="relative inline-block px-2 py-1 font-semibold text-white">
          <span class="absolute inset-0 ${
            order.status === 'Active' ? 'bg-[#3A57E8]' : 'bg-gray-500'
          } rounded-md"></span>
          <span class="relative">${order.status}</span>
        </span>
      </td>
      <td class="px-2 py-2 md:px-12 md:py-5 border-b border-gray-200 bg-white text-xs md:text-sm">${
        order.date
      }</td>
      <td class="px-2 py-2 md:px-12 md:py-5 border-b border-gray-200 bg-white text-xs md:text-sm">
        <a href="../../../HTML/ADMIN/JOB/view-job.html">
          <button class="bg-[#3A57E8] text-white px-2 py-1 md:px-4 md:py-2 rounded-md hover:bg-blue-600">
             Job Details
          </button>
        </a>
      </td>
    `;
    orderTable.appendChild(row);
  });

  // Update pagination info
  paginationInfo.innerText = `Showing ${start + 1} to ${Math.min(
    end,
    orders.length
  )} of ${orders.length} entries`;

  // Update pagination button states
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = end >= orders.length;
}

// Pagination controls
prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayOrders();
  }
});

nextPageBtn.addEventListener('click', () => {
  if (currentPage * rowsPerPage < orders.length) {
    currentPage++;
    displayOrders();
  }
});

// Initial display after DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayOrders);
