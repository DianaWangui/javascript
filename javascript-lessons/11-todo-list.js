const todoList = [
  {
    name: 'clean',
    dueDate: '23-12-2023'
  },
  {
    name: 'cook',
    dueDate: '22-12-2023'
  }];
// renderTodoList();
function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `<p>
    ${name} ${dueDate}
      <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    ">DELETE</button>
    </p>`;
    todoListHTML += html;
  }
  /*console.log(todoListHTML);*/
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodoList() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;
  const dueDateElement = document.querySelector('.js-due-date-input');
  const dueDate = dueDateElement.value;


  todoList.push({
    name: name,
    dueDate: dueDate
  });

  inputElement.value = '';
  renderTodoList();
}