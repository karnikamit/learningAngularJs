app.controller('randomCtrl', function($scope, randomService){
    $scope.message = '';
    $scope.generateRandomNumber = function(){
        $scope.randomNumber = randomService.generate();
    };
    $scope.records = [{'name': 'Amit', 'age': 28, 'sex': 'Male'},
                      {'name': 'Sowmya', 'age': 27, 'sex': 'Female'},
                      {'name': 'Uma', 'age': 24, 'sex': 'Female'}];
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
        tempRecord = {
            'name': $scope.name,
            'age': $scope.age,
            'sex': $scope.sex
        }
        $scope.records.push(tempRecord)
        _initRec()
        $scope.addRec = false;
    };
});
