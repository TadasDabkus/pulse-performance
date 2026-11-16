const chartCanvas = document.getElementById("performanceChart");


const datasets = {

    7: {

        labels: [
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT",
            "SUN"
        ],

        values: [
            8.2,
            11.4,
            6.8,
            13.2,
            9.7,
            15.1,
            14.0
        ],

        distance: "78.4",
        training: "4.8",
        recovery: "87",
        sessions: "6"

    },


    30: {

        labels: [
            "WEEK 1",
            "WEEK 2",
            "WEEK 3",
            "WEEK 4"
        ],

        values: [
            52.4,
            61.8,
            68.2,
            78.4
        ],

        distance: "261.8",
        training: "18.6",
        recovery: "84",
        sessions: "21"

    },


    90: {

        labels: [
            "AUG",
            "SEP",
            "OCT"
        ],

        values: [
            198.4,
            224.7,
            261.8
        ],

        distance: "684.9",
        training: "52.4",
        recovery: "82",
        sessions: "58"

    }

};


let performanceChart;


/* ================================
   CHART
================================ */

function createChart(period = 7) {

    const data = datasets[period];

    if (!data || !chartCanvas) {
        return;
    }


    if (performanceChart) {
        performanceChart.destroy();
    }


    performanceChart = new Chart(chartCanvas, {

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

                duration: 900,

                easing: "easeOutQuart"

            }

        }

    });

}


/* ================================
   UPDATE KPI
================================ */

function updateStats(period) {

    const data = datasets[period];

    if (!data) {
        return;
    }


    const distance =
        document.getElementById("distance");

    const training =
        document.getElementById("training");

    const recovery =
        document.getElementById("recovery");

    const sessions =
        document.getElementById("sessions");


    if (distance) {
        distance.textContent = data.distance;
    }


    if (training) {
        training.textContent = data.training;
    }


    if (recovery) {
        recovery.textContent = data.recovery;
    }


    if (sessions) {
        sessions.textContent = data.sessions;
    }

}


/* ================================
   PERIOD SWITCH
================================ */

const periodButtons =
    document.querySelectorAll(".period");


periodButtons.forEach(button => {

    button.addEventListener("click", () => {

        const period =
            button.dataset.period;


        periodButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        updateStats(period);

        createChart(period);

    });

});


/* ================================
   INITIAL LOAD
================================ */

createChart(7);
