var todo = /** @class */ (function () {
    function todo(title, status) {
        this.titles = title;
        this.status = status;
    }
    todo.prototype.add = function (list) {
        this.titles = list.Title;
        this.status = list.Status;
    };
    return todo;
}());
var count = 1;
var alist = {};
function addTodo(title, status) {
    var list = new todo(["app"], ["ACTIVE"]);
    list.add({
        Title: title,
        Status: status
    });
    alist[count] = list;
    count = count + 1;
    console.log(count);
}
;
