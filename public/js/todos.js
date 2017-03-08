getToDos();
function getToDos() {
fetch('http://localhost:3000/todos')
    .then(function(response) {
        return response.json();
        
    })
    .then(function(response) {
        console.log(response)
        loopTodos(response)
    })
    
}
// Anoter way to GET the things from backend
// function getTodos() {
//     fetch('http://localhost:3000/todos'
//     , {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             todo: todo ,
//         })
//     })
//         .then(function(response) {
//             return response.json();
//         })
// }

function loopTodos(todos){
   todos.forEach(function(todo) {
       showToDo(todo);
   });
 }

 function showToDo(todo){
     console.log(todo)
     var toDoList = `<li class = "list-group-item">${todo.todo}</li>`;
     document.querySelector('#todos').innerHTML += toDoList;
 }

 




