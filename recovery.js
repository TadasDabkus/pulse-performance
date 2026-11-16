const recoveryData = pulseData.recovery;

const chartCanvas = document.getElementById("recoveryChart");

if (!chartCanvas) {
    console.error("recoveryChart canvas not found.");
}

const labels = [
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
    "SUN"
];

let recoveryChart;


/* ================================
   RECOVERY CHART
================================ */

function createRecoveryChart() {

    if (!chartCanvas) return;

    if (recoveryChart) {
        recoveryChart.destroy();
    }

    recoveryChart = new Chart(chartCanvas, {
        type: "line",

        data: {
            labels: labels,

            datasets: [{
                label: "Readiness",

                data: recoveryData.week.readiness,

                borderColor: "#c8ff00",
                backgroundColor: "rgba(200, 255, 0, 0.08)",

                borderWidth: 2,

                pointRadius: 0,
                pointHoverRadius: 5,

                pointHoverBackgroundColor: "#c8ff00",
                pointHoverBorderColor: "#090a0a",

                fill: true,
                tension: 0.35
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            interaction: {
                intersect: false,
                mode: "index"
            },

            plugins: {
                legend: {
                    display: false
                },

                tooltip: {
                    backgroundColor: "#101212",
                    borderColor: "#303535",
                    borderWidth: 1,

                    titleColor: "#858b88",
                    bodyColor: "#f1f3f0",

                    padding: 12,
                    displayColors: false,

                    callbacks: {
                        label: function(context) {
                            return `${context.parsed.y}% readiness`;
                        }
                    }
                }
            },

            scales: {
                x: {
                    grid: {
                        display: false
                    },

                    ticks: {
                        color: "#626866",

                        font: {
                            family: "Inter",
                            size: 8,
                            weight: "700"
                        }
                    },

                    border: {
                        display: false
                    }
                },

                y: {
                    min: 60,
                    max: 100,

                    ticks: {
                        color: "#626866",

                        font: {
                            family: "Inter",
                            size: 8
                        },

                        callback: function(value) {
                            return value + "%";
                        }
                    },

                    grid: {
                        color: "rgba(255,255,255,0.05)"
                    },

                    border: {
                        display: false
                    }
                }
            },

            animation: {
                duration: 900,
                easing: "easeOutQuart"
            }
        }
    });
}


/* ================================
   TODAY'S RECOVERY
================================ */

function updateTodayRecovery() {

    const today = recoveryData.today;

    document.getElementById("readiness").textContent =
        today.readiness;

    document.getElementById("sleep").textContent =
        today.sleep.replace("h ", ":").replace("m", "");

    document.getElementById("hrv").textContent =
        today.hrv.replace(" ms", "");

    document.getElementById("restingHR").textContent =
        today.restingHR.replace(" bpm", "");

}


/* ================================
   INITIALIZE
================================ */

updateTodayRecovery();

createRecoveryChart();
