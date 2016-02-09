/* global Firebase */
app.constant('FBREF', 'https://realstackunderflow.firebaseio.com/');
app.controller("MainController", function ($scope, $uibModal, FBREF, $firebaseArray) {
    var db = new Firebase(FBREF);
    $scope.isCollapsed = true;
    $scope.test = "test";
    $scope.questionList = $firebaseArray(new Firebase(FBREF + 'questionList'));
    
    $scope.incVote = function (obj) {
        obj.vote++;
        $scope.questionList.$save(obj);
    }

    $scope.decVote = function (obj) {
        obj.vote--;
        $scope.questionList.$save(obj);
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
            newQuestion.vote = 0;
            $scope.questionList.$add(newQuestion);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    }

    
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