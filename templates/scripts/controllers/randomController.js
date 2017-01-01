app.controller('randomCtrl', function($scope, $window, randomService){
    $scope.message = '';
    $scope.generateRandomNumber = function(){
        $scope.randomNumber = randomService.generate();
    };
    $scope.records = [];
    $scope.h1 = 'Hello AngularJs';
    $scope.h2 = 'Hi Amit';
    $scope.boolMsg = true;
    $scope.callMe = function(){
        $scope.boolMsg = !$scope.boolMsg;
    };

    // show/hide records
    $scope.showRecs = false;
    $scope.getRecords = function(){
        $scope.showRecs = !$scope.showRecs;

    };

    // Add Record
    $scope.addRec = false;
    _initRec = function(){
        $scope.name = '';
        $scope.age = null;
        $scope.sex = '';
    };

    $scope.addRecord = function(){
        $scope.addRec = !$scope.addRec;
    };
    $scope.saveRecord = function(){
        if ($scope.name && $scope.age && $scope.sex){
            tempRecord = {
                'name': $scope.name,
                'age': $scope.age,
                'sex': $scope.sex
            }
            $scope.records.push(tempRecord)
            _initRec()
            $scope.addRec = false;
        }else{
            $window.alert('All Fields are required!')
        }
    };
});
