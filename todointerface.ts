interface todoList{
    Title: string,
    Status?: string
}



class todo{
    public titles: string;
    public status: string;


    constructor(title, status){
        this.titles = title;
        this.status = status;
    }
    add(list :  todoList){
         this.titles = list.Title;
        this.status = list.Status;

    }

}
var count =1;
let alist ={};


function addTodo(title : string, status: string){
    var list =   new todo(["app"],["ACTIVE"]);

    list.add(
        {
            Title: title,
            Status: status
        }
    )

    alist[count] = list;
    count = count +1;
    console.log(count);

};

