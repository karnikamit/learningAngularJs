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
    this.fb_post = function(post_text, callBack){
        $http({
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        url: "http://localhost:9000/write_wall",
        data: {"msg": post_text}}).then(function(response){
        callBack(response);
        });
    };

    this.getTracks = function(reqTracks, callBack){
        $http({
            method:"GET",
            headers: {"Content-Type": "application/json"},
            url: "http://localhost:9000/get-tracks"+"/"+ reqTracks
        }).then(function(response){
            callBack(response);
        });
    };

    this.getInfo = function(trackUrl){
        $http({
            method:"POST",
            headers: {"Content-Type": "application/json"},
            url: "http://localhost:9000/getWidget",
            data: {'url': trackUrl}
        }).success(function(data, status){
            return data
        })
    };
});
