const menu = document.getElementById('menu');
      const dashboard = document.getElementById('dashboard');
      
      const topnav= document.getElementById('topnav');
      menu.addEventListener('click', ()=>{
        dashboard.classList.toggle('hidden');
        topnav.classList.toggle('hidden')
      });