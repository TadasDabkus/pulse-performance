const insightsData = pulseData.insights;


/* ================================
   UPDATE INSIGHTS
================================ */

function updateInsights() {

    document.querySelectorAll(".stat-card").forEach((card, index) => {

        const value = card.querySelector(".stat-value");

        if (!value) return;

        if (index === 0) {
            value.innerHTML = `+${insightsData.performanceChange}<span>%</span>`;
        }

        if (index === 1) {
            value.innerHTML = `+${insightsData.trainingIncrease}<span>%</span>`;
        }

        if (index === 2) {
            value.innerHTML = `+${insightsData.recoveryChange}<span>%</span>`;
        }

        if (index === 3) {
            value.textContent = insightsData.status;
        }

    });


    /* MAIN INSIGHT */

    const mainHeading = document.querySelector(".insight-panel h2");
    const mainText = document.querySelector(".insight-panel p");

    if (mainHeading) {
        mainHeading.textContent = "Training is trending upward.";
    }

    if (mainText) {
        mainText.textContent = insightsData.main;
    }


    /* RECOMMENDATION */

    const recommendationHeading =
        document.querySelector(".dashboard-grid .panel h2");

    const recommendationText =
        document.querySelector(".dashboard-grid .panel p");

    if (recommendationHeading) {
        recommendationHeading.textContent =
            "Maintain current intensity.";
    }

    if (recommendationText) {
        recommendationText.textContent =
            insightsData.recommendation;
    }

}


/* ================================
   INITIALIZE
================================ */

updateInsights();
