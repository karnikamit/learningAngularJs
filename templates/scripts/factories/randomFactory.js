app.factory('randomFactory', function ($http){
    this.fb_post = function(post_text){
        $http({
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        url: "http://localhost:9000/write_wall",
        data: {"msg": post_text}}).then(function(response){
        return response.data.msg;
        });
});