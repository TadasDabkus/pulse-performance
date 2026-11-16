const chartCanvas = document.getElementById("activityChart");

let activityChart;


/* ================================
   CHART
================================ */

function createActivityChart(period = "day") {

    const data = pulseData.activity[period];

    if (activityChart) {
        activityChart.destroy();
    }

    activityChart = new Chart(chartCanvas, {

        type: "line",

        data: {

            labels: data.labels,

            datasets: [
                {
                    label: "Distance",

                    data: data.values,

                    borderColor: "#c8ff00",

                    backgroundColor:
                        "rgba(200, 255, 0, 0.08)",

                    borderWidth: 2,

                    pointRadius: 0,

                    pointHoverRadius: 5,

                    pointHoverBackgroundColor:
                        "#c8ff00",

                    pointHoverBorderColor:
                        "#090a0a",

                    fill: true,

                    tension: 0.35
                }
            ]

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

                            return `${context.parsed.y} km`;

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

                    beginAtZero: true,

                    grid: {

                        color:
                            "rgba(255,255,255,0.05)"

                    },

                    ticks: {

                        color: "#626866",

                        font: {

                            family: "Inter",

                            size: 8

                        },

                        callback: function(value) {

                            return value + " km";

                        }

                    },

                    border: {
                        display: false
                    }

                }

            },

            animation: {

                duration: 700,

                easing: "easeOutQuart"

            }

        }

    });
}


/* ================================
   UPDATE ACTIVITY
================================ */

function updateActivity(period) {

    const data = pulseData.activity[period];


    document.getElementById(
        "activityRange"
    ).textContent = data.range;


    document.getElementById(
        "activityDistance"
    ).textContent = data.distance;


    document.getElementById(
        "activityTraining"
    ).textContent = data.training;


    document.getElementById(
        "activitySessions"
    ).textContent = data.sessions;


    document.getElementById(
        "activityPace"
    ).textContent = data.pace;


    const titles = {

        day: "Today's activity",

        week: "Weekly activity",

        month: "Monthly activity",

        year: "2026 activity"

    };


    document.getElementById(
        "activityChartTitle"
    ).textContent = titles[period];


    createActivityChart(period);

}


/* ================================
   PERIOD SWITCH
================================ */

const periodButtons =
    document.querySelectorAll(
        ".activity-period"
    );


periodButtons.forEach(button => {

    button.addEventListener("click", () => {

        const period =
            button.dataset.period;


        periodButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        updateActivity(period);

    });

});


/* ================================
   INITIAL LOAD
================================ */

updateActivity("day");
