app.controller("todoCtrl", function($scope, _){
    var this.todo = [];
    $scope.checked = 'false';
    this.addTodo = function(todoList){
        _.each(todoList, function (value, key){
            tempObj = {
                todo_name: key,
                priority: value,
                checked: 'false'
            };
            this.todo.push(tempObj);
        });
    };

    this.removeTodo = function(todo_name){
        delete this.todo[todo_name]
    };
});