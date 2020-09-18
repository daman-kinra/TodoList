const todoInput = document.querySelector('#input');
const todoButton = document.querySelector('.icon');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

function addTodo(event)
{
    event.preventDefault();
    const tododoDiv = document.createElement("div");
    tododoDiv.classList.add("todo")
    const newTodo = document.createElement('li');
    if(todoInput.value==="" || todoInput.value.length>20)
    {
        alert("Add an apropriate task")
    }
    else
    {
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    tododoDiv.appendChild(newTodo);
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="font-size:30px;color:black;  background-color:rgb(68, 168, 68);margin-right:5px;"></i>';
    tododoDiv.appendChild(completedButton);
    completedButton.classList.add("comp-btn");
    const deletebutton = document.createElement('button');
    deletebutton.innerHTML = '<i class="fa fa-trash" aria-hidden="true" style="font-size:30px;color:black; background-color:rgb(223, 111, 59);; padding-left:3px; padding-right:3px; margin-right:6px;"></i>'
    tododoDiv.appendChild(deletebutton);
    deletebutton.classList.add("del-btn");
    todoList.appendChild(tododoDiv);
    }
    todoInput.value="";
}
function deleteCheck(e)
{
    const item = e.target;
    if(item.classList[0]==='del-btn')
    {
        const todo = item.parentElement;
        todo.remove();
        
    }
    if(item.classList[0]==='comp-btn')
    {
        const todo = item.parentElement;
        todo.classList.toggle('compl');
    }
}