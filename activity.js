const chartCanvas = document.getElementById("activityChart");


/* ================================
   ACTIVITY DATA
================================ */

const activityData = {

    day: {

        range: "16 NOV 2026",

        distance: "14.2",
        training: "1.7",
        sessions: "3",
        pace: "5:43",

        labels: [
            "06:00",
            "08:00",
            "10:00",
            "12:00",
            "14:00",
            "16:00",
            "18:00",
            "20:00"
        ],

        values: [
            0,
            8.4,
            8.4,
            8.4,
            8.4,
            8.4,
            14.2,
            14.2
        ],

        title: "Today's activity"

    },


    week: {

        range: "10–16 NOV 2026",

        distance: "78.4",
        training: "4.8",
        sessions: "6",
        pace: "5:38",

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

        title: "Weekly activity"

    },


    month: {

        range: "NOVEMBER 2026",

        distance: "261.8",
        training: "18.6",
        sessions: "21",
        pace: "5:41",

        labels: [
            "W1",
            "W2",
            "W3",
            "W4"
        ],

        values: [
            52.4,
            61.8,
            68.2,
            78.4
        ],

        title: "Monthly activity"

    },


    year: {

        range: "2026",

        distance: "684.9",
        training: "52.4",
        sessions: "58",
        pace: "5:47",

        labels: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV"
        ],

        values: [
            42,
            51,
            48,
            57,
            63,
            59,
            72,
            198,
            224,
            261,
            284
        ],

        title: "2026 activity"

    }

};


let activityChart;


/* ================================
   CHART
================================ */

function createActivityChart(period = "day") {

    const data = activityData[period];


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
   UPDATE STATS
================================ */

function updateActivity(period) {

    const data = activityData[period];


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


    document.getElementById(
        "activityChartTitle"
    ).textContent = data.title;


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

    button.addEventListener(
        "click",
        () => {

            const period =
                button.dataset.period;


            periodButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            updateActivity(period);

        }
    );

});


/* ================================
   INITIAL LOAD
================================ */

createActivityChart("day");
