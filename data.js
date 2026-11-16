const pulseData = {

    overview: {
        distance: "78.4",
        training: "4.8",
        recovery: "87",
        sessions: "6"
    },


    activity: {

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
            ]
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
            ]
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
            ]
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
            ]
        }

    },


    recovery: {

        today: {
            readiness: 87,
            sleep: "8h 12m",
            hrv: "72 ms",
            restingHR: "51 bpm"
        },

        week: {
            readiness: [82, 79, 91, 84, 88, 83, 87]
        },

        month: {
            readiness: [78, 81, 84, 82, 86, 87]
        }

    },


    insights: {

        trainingIncrease: "12.8%",
        recoveryChange: "+4.2%",
        performanceChange: "+8.4%",

        status: "UP",

        main:
            "Training volume increased while recovery remained stable.",

        recommendation:
            "Maintain the current training intensity for the next 7 days."

    }

};
