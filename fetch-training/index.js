
async function getTodos() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let todos = await response.json();
    return todos;
  } catch (error) {
    console.warn(error);
  }
}

const printTodos = async () => {
  const todosList = await getTodos();

  if (todosList.length > 0) {
    let ul = document.createElement("ul");
    document.body.append(ul);
    for (i = 0; i <= todosList.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = `${todosList[i].id} ${todosList[i].title}`;
      ul.append(li);
    }
  } else {
    let p = document.createElement("p");
    p.innerHTML = "Список пуст";
    document.body.append(p);
  }
};
printTodos();
