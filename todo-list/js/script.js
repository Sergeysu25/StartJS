

const bodyElement = document.body;
console.log(bodyElement);
const root = bodyElement.querySelector('#root');
console.log(root);

let todoList = []
root.innerHTML = `<div class="header-container">
            <button class="deleteAll btnMain">Delete All</button>
            <input type="text" name="" id="enterTodo" placeholder="Enter todo..." value=''>
            <button class="add btnMain">Add</button>
            <div class="personalCard">
            </div>
        </div>
        </div>
`
const addButton = bodyElement.querySelector('.add');//получаем кнопку add
const input = bodyElement.querySelector('#enterTodo');// получаем поле ввода
const deleteAllButton = bodyElement.querySelector('.deleteAll');// получаем кнопку deleteAll
const headerContainer = bodyElement.querySelector('.header-container');//получаем div с классом header-container
const todoWrapper = document.createElement('ul');//создаем элемент список
todoWrapper.classList.add('list-wrapper');// добавляем имя класса list-wrapper
const emptyDiv = document.createElement('div');// создаем div
headerContainer.after(emptyDiv);// указываем куда добавить пустой div
headerContainer.after(todoWrapper);// указываем куда добавить пустой ul

const renderToDoList = () => {
    if (todoList.length === 0) {
        emptyDiv.innerHTML = 'Задач пока нет';
    } else {
        todoList.map((el) => {
            todoWrapper.classList.add('list-wrapper')//
            todoWrapper.innerHTML = `<li class="card-wrapper" id=${el.id}>
            <div class="checkIcon">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 32 32">
                    <path
                        d="M 28.28125 6.28125 L 11 23.5625 L 3.71875 16.28125 L 2.28125 17.71875 L 10.28125 25.71875 L 11 26.40625 L 11.71875 25.71875 L 29.71875 7.71875 Z">
                    </path>
                </svg>
            </div>
            <p class="todoText">${el.text}</p>
            <div class="card-wrapper__wrap">
                <div class="closeIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 32 32">
                        <path
                            d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z">
                        </path>
                    </svg>
                </div>
                <div class="date">
                    ${el.date.getTime()}
                </div>
            </div>
    
        </li>`;
            headerContainer.after(todoWrapper)
            document.querySelector('.closeIcon').addEventListener('click', (e) => {
                correctElID = e.target.closest('li').getAttribute('id');
                console.log(correctElID);
                correctPosition = todoList.findIndex(el => el.id == correctElID)
                console.log(correctPosition);
                console.log(todoList);
                e.target.closest('li').remove();
                todoList.splice(correctPosition, 1);
            })
        })
    }
}

renderToDoList();
let inputValue = '';
let value = input.getAttribute('value');

input.addEventListener('change', (e) => { inputValue = e.target.value; e.target.value = '' })

const addToDoItem = () => {
    const todoItem = {
        id: new Date(),
        date: new Date(),
        text: inputValue,
        isChecked: false,
    }

    todoList.push(todoItem);
    const ul = bodyElement.querySelector('.list-wrapper');// получаем элемент ul
    const li = document.createElement('li');// создпем элемент li
    // добавляем элемент в html
    li.innerHTML = `<li class="card-wrapper" id=${todoItem.id.getTime()}>
    <div class="checkIcon">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 32 32">
            <path
                d="M 28.28125 6.28125 L 11 23.5625 L 3.71875 16.28125 L 2.28125 17.71875 L 10.28125 25.71875 L 11 26.40625 L 11.71875 25.71875 L 29.71875 7.71875 Z">
            </path>
        </svg>
    </div>
    <p class="todoText">${todoItem.text}</p>
    <div class="card-wrapper__wrap">
        <div class="closeIcon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 32 32">
                <path
                    d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z">
                </path>
            </svg>
        </div>
        <div class="date">
            ${todoItem.date.getHours()}:${todoItem.date.getMinutes()} ${todoItem.date.getDate()} ${todoItem.date.getMonth() + 1}
        </div>
    </div>
</li>`;
    ul.prepend(li);
// кнопка close
    document.querySelector('.closeIcon').addEventListener('click', (e) => {
        correctElID = e.target.closest('li').getAttribute('id');
        // console.log(correctElID);
        correctPosition = todoList.findIndex(el => el.id == correctElID);
        // console.log(correctPosition);
        // console.log(todoList);
        e.target.closest('li').remove();
        todoList.splice(correctPosition, 1);

    })

    emptyDiv.innerHTML = ''
// кнопка check
    document.querySelector('.checkIcon').addEventListener('click', (e) => {
        const parent = e.currentTarget.closest('li');
        parent.classList.toggle('card-wrapper__active');
        parent.querySelector('.todoText').classList.toggle("todoText__active");
        // correctStatus = todoList.findIndex(el => el.isChecked === true);
    })

}

const deleteAllToDo = () => {
    todoList = [];
    todoWrapper.innerHTML = ''
    emptyDiv.innerHTML = 'Задач пока нет'
}

addButton.addEventListener('click', addToDoItem);
deleteAllButton.addEventListener('click', deleteAllToDo);

console.log(addButton);
console.log(todoList);
