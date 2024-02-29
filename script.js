const jobData = {
    proyecto: [30, 40, 25, 50, 20],
    tarea: [10, 20, 15, 30, 25]
};

let myChart = null; // Variable para almacenar la instancia del gráfico

function fetchAndRenderGraph() {
    const selectedJobType = document.getElementById('jobType').value;
    const data = {
        labels: ['Trabajo 1', 'Trabajo 2', 'Trabajo 3', 'Trabajo 4', 'Trabajo 5'],
        datasets: [{
            label: `Progreso del ${selectedJobType}`,
            data: jobData[selectedJobType],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const ctx = document.getElementById('jobChart').getContext('2d');

    // Destruir el gráfico existente antes de crear uno nuevo
    if (myChart) {
        myChart.destroy();
    }

    // Crear el nuevo gráfico
    myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

window.onload = fetchAndRenderGraph;