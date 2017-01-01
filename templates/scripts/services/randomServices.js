app.service('randomService', function($http){
    var num = Math.floor(Math.random()*10);
    this.generate = function(){
        return num;
    };

    this.get_records = function(){
        $http.get('/records')
        .then(response) = function(){
            return response.data
        };
    };
});
