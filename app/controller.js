/* global Firebase */
app.constant('FBREF', 'https://realstackunderflow.firebaseio.com/');
app.controller("MainController", function ($scope, $uibModal, FBREF, $firebaseArray) {
    var db = new Firebase(FBREF);
    $scope.isCollapsed = true;
    $scope.test = "test";
    $scope.incVote = function (obj) {
        obj.vote++;
    }

    $scope.decVote = function (obj) {
        obj.vote--;
    }

    $scope.open = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'question-form.html',
            controller: function ($scope, $uibModalInstance) {
                $scope.ok = function () {
                    $uibModalInstance.close($scope.newQuestion);
                };

                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
            },
            size: 'lg'
        });

        modalInstance.result.then(function (newQuestion) {
            debugger;
            newQuestion.dateSubmitted = Date.now();
            newQuestion.comments = [];
            newQuestion.answers = [];
            newQuestion.vote = 0;
            $scope.questionList.push(newQuestion);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    }

    $scope.questionList = $firebaseArray(new Firebase(FBREF + 'questionList'));
    
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

});