window.onload = function(){
    var input = document.getElementById('addtodoid');
    var btn = document.getElementById('addbtn');
    var status = "ACTIVE";
    btn.onclick = function () {
        var value = input.value;
        addTodo(value, status);
        getTodo();
    }

}
var activeParent = document.getElementById("activeTodo");
var completedParent = document.getElementById("completeTodo");
var deletedParent = document.getElementById("deletedTodo");

function getTodo(){
    activeParent.innerHTML ="";
    Object.keys(alist).forEach(
        function (key) {
            var todo_element = createTodoElement(key, alist[key]);

        }
    )
}

function createTodoElement(id, todo_object) {
   var todo_element = document.createElement("div");
   var todo_list = document.createElement("li");
   todo_list.setAttribute("style","font-size: large");
   todo_list.innerText = todo_object.titles;
   todo_list.id = "li"+id;
   todo_element.appendChild(todo_list);
   todo_element.setAttribute("id",id);
    if(todo_object.status == "ACTIVE"){
        var complete_button = document.createElement("button");
        complete_button.innerText = "Completed";
        complete_button.setAttribute("onclick","completeTodo("+id+")");
        complete_button.setAttribute("class","btn btn-info");
        complete_button.setAttribute("style","margin: 10px")
        todo_element.appendChild(complete_button);
        var update_button = document.createElement("button");
        update_button.innerText = "Update";
        update_button.value = 0;
        update_button.id = "ub"+id;
        update_button.setAttribute("class","btn btn-info");
        update_button.setAttribute("onclick","updateTodo("+id+")");
        update_button.setAttribute("style","margin: 10px");
        todo_element.appendChild(update_button);

        activeParent.appendChild(todo_element);

    }
    if(todo_object.status== "COMPLETE"){
        var active_button = document.createElement("button");
        active_button.innerText = "Active";
        active_button.setAttribute("onclick","activeTodo("+id+")");
        active_button.setAttribute("class","btn btn-info");
        active_button.setAttribute("style","margin: 10px")
        todo_element.appendChild(active_button);

    }
    if(todo_object.status != "DELETED"){

        var delete_button = document.createElement("button");
        delete_button.innerText = "Delete";
        delete_button.setAttribute("onclick","deleteTodo("+id+")");
        delete_button.setAttribute("class","btn btn-info");
        delete_button.setAttribute("style","margin: 10px")
        todo_element.appendChild(delete_button);

    }

   return todo_element;
}

function completeTodo(id) {
    activeParent.removeChild(document.getElementById(id));
    alist[id].status = "COMPLETE";
    var todo_element = createTodoElement(id, alist[id]);
    completedParent.appendChild(todo_element);
}

function activeTodo(id){
    completedParent.removeChild(document.getElementById(id));
    alist[id].status = "ACTIVE";
    var todo_element = createTodoElement(id, alist[id]);
    activeParent.appendChild(todo_element);

}

function deleteTodo(id) {
    if(alist[id].status == "ACTIVE"){
        activeParent.removeChild(document.getElementById(id));
    }
    if(alist[id].status == "COMPLETE"){
        completedParent.removeChild(document.getElementById(id))
    }
    alist[id].status = "DELETED";
    var todo_element = createTodoElement(id, alist[id]);
    deletedParent.appendChild(todo_element);
}

function updateTodo(id) {
    var btn = document.getElementById("ub"+id);
    var todo_element = document.getElementById(id);
    var update_input = document.createElement("input");
    update_input.id = "ui"+id;
    update_input.type="text";
    if(btn.value == 0){
        btn.value = 1;
        update_input.value = alist[id].titles;
        update_input.setAttribute("style","font-size: large;"+"width: 400px;"+"margin-left: 40px");
        todo_element.replaceChild(update_input,document.getElementById("li"+id));
        btn.innerText= "Save Update";
    }

  else {
        alist[id].titles = document.getElementById("ui"+id).value;
        var element = document.createElement("li");
        element.id= "li"+id;
        element.setAttribute("style","font-size: large");
        element.innerText = alist[id].titles;
         todo_element.replaceChild(element,document.getElementById("ui"+id));
         btn.innerText= "Update";

        btn.value = 0;
    }

}