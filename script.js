const chartCanvas = document.getElementById("performanceChart");

const datasets = {
    7: {
        labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        values: [8.2, 11.4, 6.8, 13.2, 9.7, 15.1, 14.0],
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
        values: [52.4, 61.8, 68.2, 78.4],
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
        values: [198.4, 224.7, 261.8],
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

                    backgroundColor: "rgba(200, 255, 0, 0.08)",

                    borderWidth: 2,

                    pointRadius: 0,

                    pointHoverRadius: 5,

                    pointHoverBackgroundColor: "#c8ff00",

                    pointHoverBorderColor: "#090a0a",

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
                        color: "rgba(255,255,255,0.05)"
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

    document.getElementById("distance").textContent =
        data.distance;

    document.getElementById("training").textContent =
        data.training;

    document.getElementById("recovery").textContent =
        data.recovery;

    document.getElementById("sessions").textContent =
        data.sessions;
}


/* ================================
   PERIOD SWITCH
================================ */

const periodButtons =
    document.querySelectorAll(".period");

periodButtons.forEach(button => {

    button.addEventListener("click", () => {

        const period = button.dataset.period;

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


/* ================================
   NAVIGATION
================================ */

const navItems = document.querySelectorAll(".nav-item");

const navigationTargets = [
    document.querySelector(".main"),
    document.querySelector(".activity-panel"),
    document.querySelector(".recovery-panel"),
    document.querySelector(".insight")
];


/* ================================
   SCROLL TO SECTION
================================ */

function scrollToSection(target) {

    if (!target) return;

    const offset = 30;

    const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        offset;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });


    /* Highlight destination */

    target.classList.remove("dashboard-section-highlight");

    void target.offsetWidth;

    target.classList.add("dashboard-section-highlight");


    setTimeout(() => {
        target.classList.remove("dashboard-section-highlight");
    }, 800);
}


/* ================================
   NAV CLICK
================================ */

navItems.forEach((item, index) => {

    item.addEventListener("click", event => {

        event.preventDefault();


        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        item.classList.add("active");


        const target = navigationTargets[index];

        scrollToSection(target);

    });

});


/* ================================
   ACTIVE SECTION ON SCROLL
================================ */

const sectionObservers = [
    {
        element: document.querySelector(".activity-panel"),
        navIndex: 1
    },

    {
        element: document.querySelector(".recovery-panel"),
        navIndex: 2
    },

    {
        element: document.querySelector(".insight"),
        navIndex: 3
    }
];


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const navIndex =
                    sectionObservers.find(
                        section =>
                            section.element === entry.target
                    )?.navIndex;

                if (navIndex !== undefined) {

                    navItems.forEach(nav => {
                        nav.classList.remove("active");
                    });

                    navItems[navIndex].classList.add("active");

                }

            }

        });

    },

    {
        threshold: 0.35
    }
);


sectionObservers.forEach(section => {

    if (section.element) {
        observer.observe(section.element);
    }

});


/* ================================
   OVERVIEW ACTIVE STATE
================================ */

window.addEventListener("scroll", () => {

    if (window.scrollY < 150) {

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        navItems[0].classList.add("active");

    }

});
