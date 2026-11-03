let todoArray = [];

async function loadTodos() {
    const url = 'http://127.0.0.1:3000/todos';
    let resp = await fetch(url);
    todoArray = await resp.json();

    render();
}

function addTodo() {
    let todoText = document.getElementById('todoInput').value;

    todoArray.push({ "title": todoText });

    todoInput.value = '';
    saveTodo(todoText);
    render();
}

/**
 * Renders the list of todo items by updating the inner HTML of the todoList element.
 * Iterates over the todoArray and creates a list item for each todo.
 */
function render() {
    todoList.innerHTML = '';

    todoArray.forEach(todo => {
        todoList.innerHTML += `<li>${todo.title}</li>`;
    });
}

function saveTodo(todoText) {
    fetch('http://localhost:3000/todos', {
        body: JSON.stringify({ "title": todoText }),

        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },

        method: 'POST'
    });
}