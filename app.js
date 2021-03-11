//Variablen
let todoArray = ['Vacuum room', 'Do laundry', 'Chores'];

const todo_container = document.querySelector('.todo-container');
const completed_container = document.querySelector('.completed-container');
const todo = document.querySelector('.todo')
const newTask = document.querySelector('.newTask')

todoArray.forEach(function(task) {
    let newTodo = createTodo(task);
    console.log(newTodo);
    createComplete(newTodo);
});

const buttons = document.querySelectorAll('.btn')
let btn_add = document.querySelector('.add');
var btn_complete = document.querySelectorAll('.complete');
let btn_delete = document.querySelectorAll('.delete');
const input = document.querySelector('.header-add');

// Button Events
// Add Button mit Textfeld

btn_add.addEventListener('click', function(e){
    e.preventDefault();
    let userInput = document.getElementById('newTodo').value;
    if( userInput == ''){
        alert("You must write something!")
    } else if( todoArray.includes(userInput) ) {
        alert("You already listed this task!")
    } else{
        let newDiv = createTodo(userInput);
        createComplete(newDiv);
        btn_complete = document.querySelectorAll('.complete');
        todoArray.push(userInput);
    }
    document.getElementById('newTodo').value = '';

})

btn_delete.forEach(function(btn){
    btn.addEventListener('click', function(event) {
        //console.log(event.target.parentElement);
        let todoElement = event.target.parentElement;
        completed_container.removeChild(todoElement);
    })
})

btn_complete.forEach(function(btn){
    btn.addEventListener('click', function(event) {
        let button = event.target;
        let todoElement = event.target.parentElement;
        todoElement.removeChild(button);
        console.log(event.target);
        completed_container.appendChild(todoElement);
        createDelete(todoElement);
    })
})

function createTodo(task){
    let newDiv = document.createElement('div');
    let text = document.createElement('p');
    todo_container.appendChild(newDiv);
    newDiv.classList.add('todo');
    newDiv.appendChild(text);
    text.classList.add('task');
    text.textContent = task;
    return newDiv;
}

function createComplete(div){
    let completeBtn = document.createElement('i');
    div.appendChild(completeBtn);
    completeBtn.classList.add('btn', 'complete', 'fas', 'fa-check');
    completeBtn.addEventListener('click', function(event) {
        let todoElement = event.target.parentElement;
        todo_container.removeChild(todoElement);
        completed_container.appendChild(todoElement);
    })
}

function createDelete(div) {
    let deleteBtn = document.createElement('i');
    div.appendChild(deleteBtn);
    deleteBtn.classList.add('btn', 'delete', 'fas', 'fa-times');
    deleteBtn.addEventListener('click', function(event) {
        let todoElement = event.target.parentElement;
        let input = todoElement.firstChild.textContent;
        console.log(input);
        if(todoElement.parentElement == todo_container){
            todo_container.removeChild(todoElement);
        } else{
            completed_container.removeChild(todoElement);
        }
        todoArray.pop(input);
        console.log(todoArray);
    })
}