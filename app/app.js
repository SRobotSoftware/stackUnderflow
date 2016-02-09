var app = angular.module('MYMODULE', [ 'ui.bootstrap', 'ngAnimate', 'firebase']);
app.constant('FBREF', 'https://realstackunderflow.firebaseio.com/')

app.controller('AuthController', function($scope, FBREF, $firebaseArray){
    var ac = this;
    var db = new Firebase(FBREF);
    $scope.member;
        
    $scope.removeItem = function(item){
        $scope.itemList.$remove(item);
    }    
    
       
    function handleDBResponse (err, authData){
        if(err){
            console.log(err);
            return;
        } 
        console.log(authData);
        var userToSave = {
            username: ac.user.email,
            reputation: 0,
            created: Date.now()
        }
        $scope.$apply(function(){
            $scope.member = userToSave;
        })
        //THis LINE SAVES THE USER INFO INTO THE FIREBASE DB
        db.child('users').child(authData.uid).update(userToSave);
    }
    
    
    $scope.register = function(){
        db.createUser(ac.user, handleDBResponse);
    }
    
    $scope.login = function(){
        /**
         * We need to take the input from our form
         * and pass it to our database, 
         * DB is responsible for authenticating the user
         * after the user info is validated
         * the DB will send back either an Error,
         * or the authData for that user 
         * authData.uid <--- we want this 
         */
        console.log(ac.user)
        
        db.authWithPassword(ac.user, handleDBResponse)
    }
})