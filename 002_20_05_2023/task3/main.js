

function addTodo(text) {
    const container = document.getElementById('containerTodos');
    const todoEl = document.createElement('div');
    const deleteBtn = document.createElement('button');

    deleteBtn.innerText = 'Delete';
    deleteBtn.style.marginLeft = '20px';
    const todoText = document.createElement('span');
    todoText.innerText = text;
    todoEl.appendChild(todoText);
    todoEl.appendChild(deleteBtn);
    container.appendChild(todoEl);
    deleteBtn.addEventListener('click', () => {
        container.removeChild(todoEl);
    });
}

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
    if (!todoInput.value) {
        alert('please fill input');
        return;
    }
    addTodo(todoInput.value);
    todoInput.value = '';
});

