    //  data for  table
    const data = [
        { date: '08 Oct 2022, 1:35 PM', transId: 'MT-FMyeAkgUcT', description: 'Wallet deposit.', amount: '₦1000' },
    { date: '27 Jul 2024, 11:17 AM', transId: 'MT-MT-OCqFVgIlgZ', description: 'Receipt for order #MT-038140', amount: '₦10' },
    { date: '05 Aug 2024, 8:40 AM', transId: 'MT-MT-qln7NcMZm', description: 'Receipt for order #MT-174423', amount: '₦10' },
    { date: '07 Aug 2024, 10:32 AM', transId: 'MT-MT-6p5EdL8C6V', description: 'Receipt for order #MT-136913', amount: '₦10' },
    { date: '14 Sep 2024, 7:47 AM', transId: 'MT-MT-01poZxJ3kw', description: 'Receipt for order #MT-032777', amount: '₦10' },
    { date: '05 Oct 2024, 5:14 AM', transId: 'MT-MT-7Q5f5lcGHU', description: 'Flutterwave transaction.', amount: '₦10' },
    { date: '05 Oct 2024, 5:18 AM', transId: 'MT-MT-lldrxUOAW6', description: 'Flutterwave transaction.', amount: '₦200' },
    { date: '05 Oct 2024, 5:18 AM', transId: 'MT-MT-XHEyD8QKE', description: 'Flutterwave transaction.', amount: '₦100' },
    { date: '05 Oct 2024, 5:24 AM', transId: 'MT-MT-Awe01pBL0', description: 'Flutterwave transaction.', amount: '₦100' },
    { date:  '05 Oct 2024, 5:24 AM', transId: 'MT-FMyeAkgUcT', description: 'Flutterwave transaction.', amount: '₦200' },
    { date: '05 Oct 2024, 5:18 AM', transId: 'MT-MT-lldrxUoAW6', description: 'Flutterwave transaction.', amount: '₦100' },
    { date: '05 Oct 2024, 5:18 AM', transId: 'MT-MT-l8Y459pTZW', description: 'Flutterwave transaction.', amount: '₦100' },
    { date: '05 Oct 2024, 5:24 AM', transId: 'MT-MT-XGEYdBqdKE', description: 'Flutterwave transaction.', amount: '₦200' },
    { date:  '05 Oct 2024, 5:24 AM', transId: 'MT-MT-mmqrSUVqR6', description: 'Flutterwave transaction.', amount: '₦400' },
    { date: '05 Oct 2024, 5:27 AM', transId: 'MT-MT-kqFi4HKGTW', description: 'Flutterwave transaction.', amount: '₦200' },
    { date: '05 Oct 2024, 5:27 AM', transId: 'MT-MT-w877Dskw00', description: 'Flutterwave transaction.', amount: '₦200' },
    { date:  '05 Oct 2024, 5:37 AM', transId: 'MT-MT-XB4tovchcd', description: 'Flutterwave transaction.', amount: '₦200' },
    { date:  '05 Oct 2024, 5:40 AM', transId: 'MT-MT-yNtROcxpTK', description: 'Flutterwave transaction.', amount: '₦300' },
    { date:  '05 Oct 2024, 5:40 AM', transId: 'MT-MT-yNtROcxpTK', description:'Flutterwave transaction.' , amount: '₦300' },
    { date:  '05 Oct 2024, 5:45 AM', transId: 'MT-MT-MSSos1yAHE', description: 'Flutterwave transaction.', amount: '₦200' }
    ];
    
    
    let itemsPerPage = 5;
    let currentPage = 1;
    
    
    const tableBody = document.getElementById('table-body');
    const buttonController = document.getElementById('button-controller');
    
    
        function renderTable() {
       const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, data.length);
        const selectedData = data.slice(startIndex, endIndex);
        tableBody.innerHTML = '';
    
        selectedData.forEach((item, index) => {
            
            const bgColor = index % 2 === 0 ? 'bg-transparent' : 'bg-gray-50';
            tableBody.innerHTML += `
                <tr class="${bgColor} border-b">
                    <td class="px-1 lg:px-4 py-2">${item.date}</td>
                    <td class="px-1 lg:px-4 py-2">${item.transId}</td>
                    <td class="px-1 lg:px-4 py-2">${item.description}</td>
                    <td class="px-1 lg:px-4 py-2">${item.amount}</td>
                </tr>
            `;
        });
    
        
        renderButtonController();
    }
    
    
    function renderButtonController() {
        
        const totalPages = Math.ceil(data.length / itemsPerPage);
    
        
        const startEntry = (currentPage - 1) * itemsPerPage + 1;
        const endEntry = Math.min(startEntry + itemsPerPage - 1, data.length);
    
        
        buttonController.innerHTML = `
            <div>
                Showing ${startEntry} to ${endEntry} of ${data.length} entries
            </div>
             <div class=' w-[35vw] lg:w-[10vw] h-[30px] bg-gray-500  flex justify-center items-center rounded-md' >
                <button  onclick="prevPage()" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>
                <div class="w-[1px] h-4 bg-white ml-1 lg:ml-2"></div>
                <button class=' ml-1 lg:ml-2' onclick="nextPage()" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>
            </div>
        `;
    }
    
    
    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    }
    
    
    function nextPage() {
        const totalPages = Math.ceil(data.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    }
    
    
    function changeItemsPerPage() {
        itemsPerPage = parseInt(document.getElementById('entries').value, 10);
        currentPage = 1;  
        renderTable();
    }
    
    document.addEventListener('DOMContentLoaded', renderTable);

    // mobile Responsiveness
const menu = document.getElementById('menu');
const dashboard = document.getElementById('dashboard');

const topnav= document.getElementById('topnav');
menu.addEventListener('click', ()=>{
  dashboard.classList.toggle('hidden');
  topnav.classList.toggle('hidden')
});
    