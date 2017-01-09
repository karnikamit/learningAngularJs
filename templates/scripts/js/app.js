// Angular application
var app = angular.module('myApp', ['underscore']);

    app.directive('todoList', function(){
        return {
            templateUrl: "t2.html"
        };
    });

    // Get Songs from SoundCloud
    app.directive('soundCloud', function(){
        return {
            templateUrl: "sounds.html"
        };
    });
