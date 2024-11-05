document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menu = document.getElementById('menu');
    const main = document.getElementById('main');
    const rowsPerPage = 5; 
    let currentPage = 1;

    const data = [
        { orderReff: "#MT-032777", jobAction: "follow follow", link: "Visit Link", username: "Dabiri deji", status: "Pending Verification", date: "14 sep 2023", action: "Approve" },
        { orderReff: "#MT-032778", jobAction: "like post", link: "Visit Link", username: "John Doe", status: "Pending Verification", date: "15 sep 2023", action: "Approve" },
        { orderReff: "#MT-032778", jobAction: "like post", link: "Visit Link", username: "John Doe", status: "Pending Verification", date: "15 sep 2023", action: "Approve" },
        { orderReff: "#MT-032778", jobAction: "like post", link: "Visit Link", username: "John Doe", status: "Pending Verification", date: "15 sep 2023", action: "Approve" },
        { orderReff: "#MT-032778", jobAction: "like post", link: "Visit Link", username: "John Doe", status: "Pending Verification", date: "15 sep 2023", action: "Approve" },
        { orderReff: "#MT-032778", jobAction: "like post", link: "Visit Link", username: "John Doe", status: "Pending Verification", date: "15 sep 2023", action: "Approve" },
        { orderReff: "#MT-032778", jobAction: "like post", link: "Visit Link", username: "John Doe", status: "Pending Verification", date: "15 sep 2023", action: "Approve" },
    ];

    menu.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');

        if (!sidebar.classList.contains('hidden')) {
            main.classList.add('md:ml-[250px]');
        } else {
            main.classList.remove('md:ml-[250px]');
        }
    });

    function renderTable(page) {
        const tableBody = document.getElementById("tableBody");
        tableBody.innerHTML = ""; 

        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = Math.min(startIndex + rowsPerPage, data.length);

        for (let i = startIndex; i < endIndex; i++) {
            const row = document.createElement("tr");
            row.classList.add("h-16", "border-b", "border-b-slate-500", "odd:bg-zinc-100", "even:bg-white");
            row.innerHTML = `
                <td class=" text-center py-4 px-4">${data[i].orderReff}</td>
                <td class=" text-center py-4 px-4">${data[i].jobAction}</td>
                <td class=" text-center mx-auto flex justify-center py-4 px-4">
                    <div class="bg-blue-600 hover:bg-opacity-90 rounded-md">
                        <p class="text-white px-6 md:px-2 py-1 cursor-pointer font-medium"><a href="${data[i].link}" >${data[i].link}</a></p>
                    </div>
                </td>
                <td class=" text-center py-4 px-4">${data[i].username}</td>
                <td class=" flex justify-center mx-auto py-4 px-4">
                    <div class="bg-red-600 rounded-md">
                        <p class="text-center text-white cursor-pointer font-medium py-1 px-3">${data[i].status}</p>
                    </div>
                </td>
                <td class=" text-center py-4 mx-4 md:mx-0 px-4">${data[i].date}</td>
                <td class=" flex justify-center mx-auto">
                    <div class="bg-green-500 rounded-md mx-4">
                        <p class="text-center px-2 py-1 cursor-pointer text-white font-medium"><i class="fa-solid fas fa-check-circle font-light text-xs p-1"></i>${data[i].action}</p>
                    </div>
                </td>
            `;
            tableBody.appendChild(row);
        }

        document.getElementById("pageInfo").innerText = `Page ${page} of ${Math.ceil(data.length / rowsPerPage)}`;

        document.getElementById("prevBtn").disabled = currentPage === 1;
        document.getElementById("nextBtn").disabled = currentPage === Math.ceil(data.length / rowsPerPage);
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable(currentPage);
        }
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        if (currentPage < Math.ceil(data.length / rowsPerPage)) {
            currentPage++;
            renderTable(currentPage);
        }
    });

    renderTable(currentPage);
});

function menuClick() {
  let menu = document.getElementById('menu');
  let sidebar = document.getElementById('sidebar');

  if (sidebar.classList.contains('hidden')) {
    sidebar.classList.remove('hidden');
  } else {
    sidebar.classList.add('hidden');
  }
}