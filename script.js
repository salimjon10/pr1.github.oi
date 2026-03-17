let chart;

// LOGIN
function login(){
  const name = document.getElementById('name').value || 'User';
  const email = document.getElementById('email').value || 'email@mail.com';

  document.getElementById('profileName').textContent = name;
  document.getElementById('profileEmail').textContent = email;
  document.getElementById('avatar').textContent = name[0].toUpperCase();

  document.getElementById('login').style.display='none';
  document.getElementById('app').style.display='flex';
}

// SWITCH PAGES
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ELEMENTS
const cacEl = document.getElementById('cac');
const ltvEl = document.getElementById('ltv');
const roiEl = document.getElementById('roi');
const payingEl = document.getElementById('paying');

// CALCULATE
function calculate(){
  const m = +document.getElementById('marketing').value || 0;
  const u = +document.getElementById('users').value || 1;
  const p = +document.getElementById('payingUsers').value || 0;
  const r = +document.getElementById('revenue').value || 0;
  const l = +document.getElementById('lifetime').value || 1;

  const cac = Math.round(m / u);
  const arpu = p ? r / p : 0;
  const ltv = Math.round(arpu * l);
  const profit = r - m;

  cacEl.textContent = cac + " ₽";
  ltvEl.textContent = ltv + " ₽";
  roiEl.textContent = profit + " ₽";
  payingEl.textContent = p;

  updateChart(profit);
  showPage('dash');
}

// CHART
function updateChart(profit){
  if(!chart){
    chart = new Chart(document.getElementById('chart'),{
      type:'line',
      data:{
        labels:['1','2','3','4','5','6'],
        datasets:[{
          label:'Profit',
          data:[0,0,0,0,0,0]
        }]
      }
    });
  }

  chart.data.datasets[0].data =
    chart.data.datasets[0].data.map((v,i)=>Math.round(profit*(i+1)/6));

  chart.update();
}