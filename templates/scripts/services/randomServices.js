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

    // post on fb
    this.fb_post = function(post_text){
        $http({
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        url: "http://localhost:9000/write_wall",
        data: {"msg": post_text}}).then(function(response){
        return response.data.msg;
        });
    };
});
