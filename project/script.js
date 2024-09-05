const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");// press shift alt down arrow to copy down same
const todolist = document.querySelector(".todo-list");


button.addEventListener("click", addToDo);//when we click on then we want to run addToDo list
todolist.addEventListener("click",deletetodo);
function addToDo(event){
    event.preventDefault(); // this will not submit the information entered to the server

    console.log(input.value);
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo-container") ;//.classList is the list of class div will have and this is an array
    
    const todoitem = document.createElement("li");
    todoitem.classList.add("todo-item") ;
    todoitem.innerText = input.value;// to get the text what we write in the button
    tododiv.appendChild(todoitem);//this are used to ad the li to the div container

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn") ;
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    tododiv.appendChild(deleteButton);

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn") ;
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    tododiv.appendChild(completeButton);


    todolist.appendChild(tododiv)// this is to add these in the todolist class of the html code (where ul is written) 
    input.value = "";//this fill be blank string like once u write on the button and click then it will be blank for the next one

    
}
function deletetodo(event){
    console.log(event.target);

    const item = event.target;
    if(item.classList[0] === "delete-btn"){ /* in JS we put === (3) (it is case sensitive)*/
        const delItem = item.parentElement;
        delItem.remove();
    }
    if(item.classList[0] === "complete-btn"){
        const delItem = item.parentElement;
        delItem.classList.toggle("completed");
    }
}