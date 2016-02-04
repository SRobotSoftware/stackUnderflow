app.controller("MainController", function ($scope) {
    $scope.test = "test"

    // $scope.question = {
    //     title: "",
    //     body: "",
    //     answers: [
    //         {
    //         comments:[
    //     {
    //             vote:"",
    //             body: "",  
                
    //             }
    // ],
    //         vote: "",
    //         body: "",
    //         }],
    //     comments: [
    //         {
    //             vote:"",
    //             body: "",
    //         }
    //     ],
    //     vote: "",
    //     dateSubmitted: "",
    // };

    $scope.questionList = [
        {
            title: " What the @#$% are we doing??",
            body: "I dont know what I am doing. For that matter where I even am!",
            answers: [
                {
                    comments: [
                        {
                            vote: "-5",
                            body: "get a life",
                        },
                        {
                            vote: "-3",
                            body: "leave him alone",
                        },
                    ],
                    vote: "5000",
                    body: "learn to learn",
                },
                {
                    comments: [
                        {
                            vote: "-5",
                            body: "stand 1",

                        },
                        {
                            vote: "-3",
                            body: "stand 2",
                        },
                    ],
                    vote: "5000",
                    body: "stand in the place where you were",
                }],
            comments: [
                {
                    vote: "5",
                    body: "to the question",
                }
            ],
            vote: "9",
            dateSubmitted: "02/03/2016",
        },
        {
            title: "Why is the sky blue",
            body: "I dont understand why the sky is blue. i fell like it is like polar bear fur",
            answers: [
                {
                    comments: [
                        {
                            body: "doin it wrong, MERICA!!!",
                            vote: "7"
                        }
                    ],
                    vote: "2",
                    body: "stuff bounces of the sky",
                }],
            comments: [
                {
                    vote: "-3",
                    body: "tree hugger!",
                }
            ],
            vote: "5",
            dateSubmitted: "01/01/2016",
        },

    ]










































});
