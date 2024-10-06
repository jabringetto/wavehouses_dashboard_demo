import Chart from 'chart.js/auto'

(async function() {

  const response = await fetch('https://script.google.com/macros/s/AKfycbwyvLZXJNtLEeYbLRj81i4hSwFGHVLF2sZzBz5_INJCAnuzZHgW7ZSe1PeagcpEA3I/exec')
  console.log(response);
  const data= await response.json();
  console.log(data);
  new Chart(
    document.getElementById('monthlyincome'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.month),
        datasets: [
          {
            label: 'Net income by month in dollars',
            data: data.map(row => row.income)
          }
        ]
      }
    }
  );



})();